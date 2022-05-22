import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "@store/reducers";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { UserListItem } from "../interfaces";
import { initProfileList, refreshProfileList } from "../store/profile.actions";
import { getUserList, getLoadingState } from "../store/profile.selectors";


@Component({
    selector: 'crx-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit, OnDestroy {
    userList$ = this.store.select(getUserList);
    destroy$ = new Subject<void>();
    loading$ = this.store.select(getLoadingState);

    constructor(
        private store: Store<AppState>,
        private router: Router,
    ) {}

    ngOnInit(): void {
        // initialize user list state if not already there
        this.userList$.pipe(
            filter((userList) => !userList),
            takeUntil(this.destroy$)
        ).subscribe(() => this.store.dispatch(initProfileList()));
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    refreshUserList(): void {
        this.store.dispatch(refreshProfileList())
    }

    viewProfileDetail(id: string): void {
        this.router.navigate(
            ['/profile'],
            { queryParams: { id } }
        );
    }

    identify(index: number, item: UserListItem) {
        return item.id
    }
}
