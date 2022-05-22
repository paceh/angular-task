import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initProfile } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserLoadingState, getUserProfile } from '@store/selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);
    loading$ = this.store.select(getUserLoadingState);

    constructor (private store: Store<AppState>) {}

    ngOnInit () {

        this.store.dispatch(initProfile());
    }

}
