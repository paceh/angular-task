import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserProfile } from '@features/profile/interfaces/user-profile';
import { profileListActions } from './profile-list.actions';
import { ProfileListService } from './profile-list.service';

@Injectable()
export class ProfileListffects {

    loadProfileList$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileListActions.load),
            switchMap((action) =>
                this.service
                    .getRandomUsers(action.pageSize)
                    .pipe(
                        map((response: { results: any }) => profileListActions.loadSuccess({
                            profiles: response.results ? response.results.map(this.profileMapper) as UserProfile[] : [] as UserProfile[]
                        }), catchError(({ error }) =>
                            of(profileListActions.loadFail({ error }))
                        ))
                    )));

    });

    private profileMapper(item: any, idx: number): UserProfile {

        return {
            ...item,
            cellNumber: item.cell,
            city: item.location.city,
            dateOfBirth: item.dob.date,
            email: item.email,
            firstName: item.name.first,
            id: `profile-${idx}`,
            lastName: item.name.last,
            phoneNumber: item.phone,
            picture: item.picture.medium,
            state: item.location.state
        } as UserProfile;

    }

    constructor(
        private actions$: Actions<Action>,
        private service: ProfileListService
    ) { }

}
