import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { profileActions } from './profile.actions';

@Injectable()
export class ProfileEffects {
    @Effect()
    getProfile$ = this.actions$.pipe(
        ofType(profileActions.getProfile),
        mergeMap(() =>
            this.profileService.getUserProfile().pipe(
                map((res: { results: [[]] }) => {
                    const r: any = res.results[0];
                    const user = {
                        cellNumber: r.cell,
                        city: r.location.city,
                        dateOfBirth: r.dob.date,
                        email: r.email,
                        firstName: r.name.first,
                        lastName: r.name.last,
                        phoneNumber: r.phone,
                        picture: r.picture.medium,
                        state: r.location.state,
                    };

                    return profileActions.getProfileSuccess({ user });
                }),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect()
    getProfiles$ = this.actions$.pipe(
        ofType(profileActions.getProfiles),
        mergeMap(() =>
            this.profileService.getUserProfiles().pipe(
                map((res: { results: [[]] }) => {
                    const users = res.results.map((r: any, i: number) => {
                        return {
                            id: i + 1,
                            cellNumber: r.cell,
                            city: r.location.city,
                            dateOfBirth: r.dob.date,
                            email: r.email,
                            firstName: r.name.first,
                            lastName: r.name.last,
                            phoneNumber: r.phone,
                            picture: r.picture.medium,
                            state: r.location.state,
                        };
                    });

                    return profileActions.getProfilesSuccess({ users });
                }),
                catchError(() => EMPTY)
            )
        )
    );

    constructor(
        private profileService: ProfileService,
        private actions$: Actions
    ) {}
}
