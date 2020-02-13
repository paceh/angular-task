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
        const profileId = this.route.snapshot.paramMap.get('profileId');
        if (profileId) {
            console.log('There is an Id', profileId);
            this.store.dispatch(ProfileActions.selectedProfile({ profileId }));
        } else {
            this.store.dispatch(ProfileActions.initProfile());
        }

    }
}
