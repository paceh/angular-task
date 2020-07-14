import { UserProfile } from '@features/profile/interfaces/user-profile';
import { ActivatedRoute } from '@angular/router';
import { ProfileListObservableService } from './../../profile-list/profile-list-observable.servce';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

import { take } from 'rxjs/operators';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    profileId: string = null;
    profileList$ = this.profileListObservableService.profileList$;
    user$ = this.store.select(getUserProfile);

    constructor(private store: Store<AppState>,
        private profileListObservableService: ProfileListObservableService,
        private activatedRoute: ActivatedRoute) {
        this.profileId = this.activatedRoute.snapshot.params['id'];
    }

    ngOnInit() {


        // if (this.profileId) {

        this.profileList$.pipe(take(1)).subscribe((profiles) => {

            if (!this.profileId || !profiles) {

                this.generateRandomProfile();
                return;

            }

            const foundProfile = profiles.find((profile: UserProfile) => profile.id === this.profileId);
            if (foundProfile) {

                this.store.dispatch(profileActions.set({ profile: foundProfile }));

            } else {

                this.generateRandomProfile();

            }
        });


        // } else {

        //     this.generateRandomProfile();
        // }

    }

    generateRandomProfile() {
        this.store.dispatch(profileActions.load());
    }
}

