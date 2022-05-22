import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initProfile } from '@store/actions';
import { AppState } from '@store/reducers';
import { getLoadingState, getUserList, getUserProfile } from '@store/selectors';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { UserListItem } from '../interfaces';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {
    user$ = this.store.select(getUserProfile);
    userList$ = this.store.select(getUserList);
    loading$ = this.store.select(getLoadingState);
    
    userListUser$ = this.userList$.pipe(
        filter((userListUser) => !!userListUser),
        withLatestFrom(this.activatedRoute.queryParams),
        map(([userList, queryParams]: [UserListItem[], Params]) => {
            const idQueryParam = queryParams.id
            if (idQueryParam) {
                return userList
                    .filter(item => item.id === idQueryParam)
                    .map(item => item.user)
                    .shift()
            }
        })
    )

    constructor (
        private store: Store<AppState>,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.store.dispatch(initProfile());
    }

    navToProfileList(): void {
        this.router.navigate(['/profile/list'])
    }
}
