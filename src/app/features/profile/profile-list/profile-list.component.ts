import { Component, OnInit } from '@angular/core';
import { RoutingService } from '@core/routing';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfileList } from '@store/selectors';
import { UserProfile } from '../interfaces';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users$ = this.store.select(getUserProfileList);

    constructor(private store: Store<AppState>, private profileDetailService: ProfileService, private routingService: RoutingService) { }

    ngOnInit() {
        this.profileDetailService.getRandomProfile('?results=10')
            .subscribe(
                data => {
                    this.store.dispatch(profileActions.initRandomProfileList({ profiles: data.results }))
                },
                err => this.store.dispatch(profileActions.initRandomProfileList(null))
            );
    }

    goToProfile(user: UserProfile) {
        this.routingService.toRoute(['../profile', user.email])
    }
}
