import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { ProfileActions } from '@store/actions';
import { ActivatedRoute } from '@angular/router';

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

        console.log('seed', seed);
        console.log('index', profileIndex);

        this.store.dispatch(ProfileActions.selectedProfile({ seed, profileIndex }));

        if (seed && profileIndex) {
            // console.log('I am here');
            // this.store.dispatch(ProfileActions.selectedProfile({ seed, profileIndex }));
        } else {
            // this.store.dispatch(ProfileActions.initProfile());
        }

    }
}
