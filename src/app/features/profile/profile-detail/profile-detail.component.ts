import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfile } from '@store/selectors';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfile } from '../interfaces';


@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit, OnDestroy {


    /**
     * Subscriptions
     */
    private _subs: Array<Subscription>;


    user$ = this.store.select(getProfile);


    constructor (
        private store: Store<AppState>,
        private _route: ActivatedRoute
    ) {
        this._subs = [];
    }

    
    ngOnInit () {
        // this.store.dispatch(profileActions.initProfile());

        this._subs.push(
            this._route.params.subscribe((params) => {
                if (params.hasOwnProperty('id')) {


                    /**
                     * just for fun :)))
                     */
                    this.user$ = this.store.pipe(
                        map((store: any) => {
                            // console.log('store list', store.profile.list);
                            if (store.profile.list) {
                                return store.profile.list.list.find((row: UserProfile) => row.id == params.id)
                            }
                        })
                    );
                }
                else {


                    /**
                     * get random user from api
                     */
                    this.user$ = this.store.select(getProfile);
                    this.store.dispatch(profileActions.initProfile());
                }
            })
        );

    }


    /**
     * unsubscribe
     */
    ngOnDestroy() {
        this._subs.forEach((sub: any) => sub.unsubscribe());
    }
}
