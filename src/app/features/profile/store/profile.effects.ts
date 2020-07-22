import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { profileActions } from './profile.actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProfileService } from './profile.service';
import * as Funtions from '../../../utils/functions'

@Injectable()
export class ProfileEffects {

    getRandomUser$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(profileActions.getRandomProfile),
            switchMap(_ => {
                return this.profileService.getUsers(1).pipe(
                    map((response: any) => {
                        return profileActions.getRandomProfileSuccess({
                            payload: Funtions.MapResponseToUserProfile(response.results[0])
                        })
                    }),
                    catchError(error => of(profileActions.getProfileError(error)))
                )
            })
        )
    });

    getUserList$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(profileActions.getProfileList),
            switchMap(_ => {
                return this.profileService.getUsers(10).pipe(
                    map((response: any) => {
                        return profileActions.getProfileListSuccess({
                            payload: response.results.map((r: any) => Funtions.MapResponseToUserProfile(r))
                        })
                    }),
                    catchError(error => of(profileActions.getProfileError(error)))
                )
            })
        )
    });

    constructor(private actions$: Actions, private profileService: ProfileService) { }
}