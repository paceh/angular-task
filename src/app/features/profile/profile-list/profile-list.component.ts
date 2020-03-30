import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { AppState } from '@store/reducers';
import { getProfileList } from '@store/selectors';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


/**
 * columns for mat-table
 */
export const Columns = [
    {
        id: 'cellNumber',
        name: 'Cell phone'
    }, {
        id: 'city',
        name: 'City'
    }, {
        id: 'dateOfBirth',
        name: 'Date of birth'
    }, {
        id: 'email',
        name: 'Email address'
    }, {
        id: 'firstName',
        name: 'Firts name'
    }, {
        id: 'lastName',
        name: 'Last name'
    }, {
        id: 'phoneNumber',
        name: 'Phone number'
    }, {
        id: 'picture',
        name: 'Picture'
    }, {
        id: 'state',
        name: ''
    }
];


@Component({
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})




export class ProfileListComponent implements OnInit {


    /**
     * Subscriptions
     */
    private _subs: Array<Subscription>;


    /**
     * ui settings
     */
    public component: any;


    /**
     * data for material
     */
    public list: MatTableDataSource<any[]>;


    constructor (
        private store: Store<AppState>,
        private _router: Router
    ) {
        this._subs = [];
        this.list = new MatTableDataSource([]);
        this.component = {
            columns: Columns,
            displayColumns: Columns.map(row => row.id),
        }
    }


    ngAfterViewInit() {
        this._subs.push(
            this.store.select(getProfileList).subscribe((state: any) => {
                if (state.hasOwnProperty('list') && state.list.length) {


                    /**
                     * set material dataSource
                     */
                    this.list.data = state.list;
                }
            })
        );
    }

    
    
    ngOnInit () {


        /**
         * fire init profile list
         */
        this.store.dispatch(profileActions.initProfileList());
    }


    /**
     * 
     * @param id 
     * go to profile details
     */
    public goToDetails(id: any) {
        this._router.navigate(['/profile/' + id ]);
    }
    
}
