import { Component, OnInit } from '@angular/core';
import { ProfileActions } from '@features/profile/store/actions';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { ProfileService } from '@features/profile/common/services/profile.service';
import { isNull } from 'util';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    public user$: {[k: string]: any};
    public userState$ = this.store.select(getUserProfile);

    constructor (
        private store: Store<AppState>,
        private profileService: ProfileService
    ) {}

    ngOnInit () {

        this.store.dispatch(ProfileActions.loadProfile());

        if (!isNull(this.profileService.selectedRowData.value)) {
            this.user$ = this.profileService.selectedRowData;
        } else {
            this.user$ = this.userState$.pipe(
                filter(data => !!data)
            );
        }
    }
}
