import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html',
})
export class ProfileDetailComponent implements OnInit {
    user$ = this.store.select(getUserProfile);

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id: number = this.route.snapshot.params['id'];

        if (id) {
            return this.store.dispatch(
                profileActions.getProfileDetails({ id: Number(id) })
            );
        }

        this.store.dispatch(profileActions.getProfile());
    }
}
