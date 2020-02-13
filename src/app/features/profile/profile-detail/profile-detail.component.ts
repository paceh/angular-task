import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfile, getUserProfiles } from '@store/selectors';
import { ProfileActions } from '@store/actions';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>, private route: ActivatedRoute) {}

    ngOnInit () {
        const profileIndex = +(this.route.snapshot.paramMap.get('profileIndex'));
        const seed = this.route.snapshot.paramMap.get('seed');

        if (seed && profileIndex) {
            this.store.dispatch(ProfileActions.selectedProfile({ seed, profileIndex }));
        } else {
            this.store.dispatch(ProfileActions.initProfile());
        }
    }
}
