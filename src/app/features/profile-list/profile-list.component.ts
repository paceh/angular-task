import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { UserProfile } from '@features/profile/interfaces/user-profile';
import { getProfiles } from '@store/selectors';
import { profileListActions } from '@store/actions';
import { ProfileListState } from './interfaces';

@Component({
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})

export class ProfileListComponent {

    displayedColumns: string[] = ['id', 'name', 'gender', 'email', 'phone', 'dob', 'actions'];
    profiles$: Observable<UserProfile[]> = this.store.select(getProfiles)
    .pipe(
        tap((profiles: UserProfile[]) => {

            if (!profiles.length) {

                this.store.dispatch(profileListActions.loadProfileList());

            }

        }),
        filter((profiles: UserProfile[]) => profiles !== null)
    );

    constructor (private store: Store<ProfileListState>, private router: Router) {}


    gotoDetails (profileId: any) {

        this.router.navigate(['/profiles/', profileId]);

    }

}
