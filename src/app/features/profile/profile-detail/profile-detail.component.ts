import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { RoutingService } from '@core/routing';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (
        private store: Store<AppState>,
        private routingService: RoutingService,
    ) {}

    ngOnInit () {

        this.store.dispatch(profileActions.initProfile());

        const index = Number(this.routingService.queryParams.id)
        if (typeof index === "number" && index === index) {
            this.store.dispatch(profileActions.getProfileByIndex({ index }))
        } else {
            this.store.dispatch(profileActions.loadRandomProfile())
        }

    }

}
