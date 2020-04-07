import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfiles } from '@store/selectors';
import { profileActions } from '../store/profile.actions';

@Component({
    selector: 'app-profiles-list',
    templateUrl: './profiles-list.component.html',
    styleUrls: ['./profiles-list.component.less'],
})
export class ProfilesListComponent implements OnInit {
    users$ = this.store.select(getUserProfiles);

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.dispatch(profileActions.getProfiles());
    }
}
