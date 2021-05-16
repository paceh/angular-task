import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@store/reducers';
import { getUserList } from '@store/selectors';

import * as ProfileActions from '@store/actions';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    userList$ = this.store.select(getUserList);

    constructor(
        private store: Store<AppState>,
        private router: Router
    ) { }

    ngOnInit() {
        // refreshing the profile list every time when using "route.navigate" to this page is undesireable and confusing to end users
        // to mitigate this, the loadProfileList effect will obtain the latest profile list from the store and decide whether or not to
        // execute a web server for a random profile list
        this.store.dispatch(ProfileActions.loadProfileList());
    }

    onUserClick = (id: string) => this.router.navigate([ 'profile', id ])

}
