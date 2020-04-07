import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';

import { ProfileActions } from '@features/profile/store/actions';
import { ProfileService } from '../../common/services/profile.service';
import { UserProfileModel } from '@features/profile/common/models/user-profile.model';

@Injectable()
export class ProfileEffects {

    // tslint:disable-next-line:ter-arrow-body-style
    loadProfile$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileActions.loadProfile),
        mergeMap(() => this.profileService.getProfile()
            .pipe(
                map(user => {
                    const data = new UserProfileModel(user.results[0]);
                    return ProfileActions.loadProfileSuccess({ user: data });
                }),
                catchError(() => EMPTY)
            ))
        )
    );

    // tslint:disable-next-line:ter-arrow-body-style
    loadProfiles$ = createEffect(() => this.actions$.pipe(
        ofType(ProfileActions.loadProfile),
        mergeMap(() => this.profileService.getProfiles(10)
            .pipe(
                filter(data => !!data),
                map((users: {results: {[k: string]: any}[]}) => {
                    const data = users.results.map(items => new UserProfileModel(items));
                    return ProfileActions.loadProfilesSuccess({ users: data});
                }),
                catchError(() => EMPTY)
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) {}
}
