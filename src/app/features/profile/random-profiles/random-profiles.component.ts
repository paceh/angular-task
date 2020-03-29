import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '@features/profile/store/actions';
import { getUserProfiles } from '@features/profile/store/profile.selectors';
import { filter } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '@features/profile/common/services/profile.service';

@Component({
    selector: 'app-random-profiles',
    templateUrl: './random-profiles.component.html',
    styleUrls: ['./random-profiles.component.less']
})
export class RandomProfilesComponent implements OnInit, OnDestroy {

    public usersState$ = this.store.select(getUserProfiles);
    public dataSource: { [k: string]: any };
    public displayedColumns: string[] = ['name', 'phone', 'cellPhone', 'city', 'email', 'dob', 'image'];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor (
        private store: Store<AppState>,
        private profileService: ProfileService,
        private router: Router
    ) {
    }

    ngOnInit () {
        this.store.dispatch(ProfileActions.loadProfile());
        this.usersState$.pipe(
            filter(data => !!data)
        )
        .subscribe(data => this.dataSource = new MatTableDataSource(data));
    }

    public getRowData (data: {[k: string]: any}) {
        this.profileService.getSelectedRowData(data);
        this.router.navigate(['profile']);
    }

    ngOnDestroy (): void {
        this.dataSource = void 0;
    }
}
