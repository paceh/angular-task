import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';

import { AppState } from '@store/reducers';
import { getUserList } from '@store/selectors';
import { UserProfileService } from '@core/services/user-profile.service';
import { DataTransformService } from '@core/services/data-transform.service';
import { UserProfile } from '../interfaces';

import * as ProfileActions from '@store/actions';

@Injectable()
export class ProfileEffects {

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private snackBar: MatSnackBar,
        private service: UserProfileService,
        private dataTransformService: DataTransformService
    ) { }

    initProfile$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileActions.initProfile),
        exhaustMap(() => this.service.getUserProfiles$().pipe(
            map(({ results }) => {
                const user = results.shift();
                const userProfile: UserProfile = this.dataTransformService.userToUserProfile(user);
                return ProfileActions.initProfileSuccess({ userProfile });
            }),
            catchError((error: HttpErrorResponse) => of(ProfileActions.initProfileFailure({ message: 'Failed to retrieve user profile!' })))
        ))
    ));

    loadProfileList$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileActions.loadProfileList),
        withLatestFrom(this.store.pipe(select(getUserList))),
        exhaustMap(([ action, userList ]: [ ProfileActions.Actions, UserProfile[] ]) => {
            if (userList && userList.length) {
                return EMPTY;
            } else {
                return this.service.getUserProfiles$(10).pipe(
                    map(({ results }) => {
                        const userProfiles: UserProfile[] = results.map((user: any) => this.dataTransformService.userToUserProfile(user));
                        return ProfileActions.loadProfileListSuccess({ userProfiles });
                    }),
                    catchError((error: HttpErrorResponse) => of(ProfileActions.loadProfileListFailure({ message: 'Failed to retrieve user profile list!' })))
                );
            }
        })
    ));

    initProfileOrLoadProfileListFailure$ = createEffect(() => this.actions$.pipe(
        ofType(
            ProfileActions.initProfileFailure,
            ProfileActions.loadProfileListFailure
        ),
        map(({ message }) => this.snackBar.open(message, 'OK', { duration: 5000 }))
    ), { dispatch: false });

}
