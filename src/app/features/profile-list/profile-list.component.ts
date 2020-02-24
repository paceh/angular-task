import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProfileListActions from './profile-list.action'
import { AppState } from '@store/reducers';
import { getUserById, getUsersList } from './store/profile.-list.selectors';

@Component({
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    user$ = this.store.select(getUsersList);
    /* testing purpose
    userById$ = this.store.select(getUserById);*/
    constructor (private store: Store<AppState>) {}

    ngOnInit () {
        this.store.dispatch(ProfileListActions.getUsersList());
    }
    getuserById(userId: Number) {
        console.log('dispatch profile id', userId);
        this.store.dispatch(ProfileListActions.getUserById(userId));
      }

}
