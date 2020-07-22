import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfile, getProfileById } from '@store/selectors';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$: Observable<UserProfile>;

    constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        if (id != null) {
            this.user$ = this.store.select(getProfileById(id));
        } else {
            this.store.dispatch(profileActions.getRandomProfile());
            this.user$ = this.store.select(getProfile);
        }
    }

}
