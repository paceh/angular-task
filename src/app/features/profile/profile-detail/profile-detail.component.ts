import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

import * as ProfileActions from '@store/actions';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private store: Store<AppState>,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit () {
        const id = this.activatedRoute.snapshot.paramMap.get('id');

        if (id) {
            this.store.dispatch(ProfileActions.selectProfile({ id }));
        } else {
            this.store.dispatch(ProfileActions.initProfile());
        }
    }

}
