import { UserProfile } from './../interfaces/user-profile';
import { profileActions } from '@store/actions';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from './profile.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects {

    loadProfileCatalog$ = createEffect(() => {

        return this.actions$.pipe(
            ofType(profileActions.load),
            switchMap((action) =>
                this.service
                    .getRandomUser()
                    .pipe(
                        map((response: { results: any }) => profileActions.loadSuccess({
                            profile: response.results && response.results.length ? response.results.map(this.profileMapper)[0] as UserProfile : {} as UserProfile
                        }), catchError(({ error }) =>
                            of(profileActions.loadFail({ error }))
                        )
                        )
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
            id: idx,
            lastName: item.name.last,
            phoneNumber: item.phone,
            picture: item.picture.medium,
            state: item.location.state
        } as UserProfile;

    }
    constructor(
        private actions$: Actions<Action>,
        private service: ProfileService
    ) { }

}
