import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { profileActions } from '@store/actions';
import { profileListActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile, getUserProfileDetails } from '@store/selectors';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    profileId: string;
    user$: Observable<UserProfile>;

    constructor (private store: Store<AppState>, private activatedRoute: ActivatedRoute,  private router: Router) {

        this.profileId = this.activatedRoute.snapshot.params.id;

    }

    ngOnInit () {
        if (this.profileId) {

            this.store.dispatch(profileListActions.loadProfileDetails({ id: this.profileId }));
            this.user$ = this.store.select(getUserProfileDetails);

        } else {

            this.store.dispatch(profileActions.loadProfile());
            this.user$ = this.store.select(getUserProfile);

        }

    }

    backToProfiles () {

        this.router.navigate(['/profiles']);

    }

}
