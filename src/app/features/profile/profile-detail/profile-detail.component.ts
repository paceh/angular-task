import { Component, OnInit } from '@angular/core';
import { RoutingService } from '@core/routing';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor(private store: Store<AppState>, private profileService: ProfileService, private routingService: RoutingService) { }

    ngOnInit() {
        if (this.routingService.getRouteParam('id')) {
            this.store.dispatch(profileActions.setProfile({ email: this.routingService.getRouteParam('id') }))
        } else {
            this.profileService.getRandomProfile()
                .subscribe(
                    data => this.store.dispatch(profileActions.initRandomProfile({ profile: data.results[0] })),
                    err => this.store.dispatch(profileActions.initRandomProfile(null)),
                );
        }
    }

    goToRoute(route: string) {
        this.routingService.toRoute([route]);
    }
}
