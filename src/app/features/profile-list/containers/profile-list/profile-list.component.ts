import { UserProfile } from '@features/profile/interfaces/user-profile';
import { profileListActions } from './../../store/profile-list.actions';
import { Store, select } from '@ngrx/store';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as fromSelectors from '@features/profile-list/store/profile-list.selectors';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ProfileListObservableService } from '@features/profile-list/profile-list-observable.servce';

@Component({
  selector: 'crx-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileListComponent implements OnInit {


  displayedColumns: string[] = ['view', 'firstName', 'lastName', 'email', 'cellNumber', 'dateOfBirth'];

  loaded$ = this.store.pipe(select(fromSelectors.getListLoaded));
  loading$ = this.store.pipe(select(fromSelectors.getListLoading));

  initialLoad$ = combineLatest(this.loaded$, this.loading$)
    .pipe(take(1)).subscribe(([loaded, loading]) => !loaded && !loading && this.generateProfiles());

  profileList$ = this.store.pipe(select(fromSelectors.profileList));

  constructor(private store: Store<any>,
    private router: Router,
    private profileObservableService: ProfileListObservableService) { }


  ngOnInit() {
  }

  generateProfiles() {

    this.store.dispatch(profileListActions.load({ pageSize: 10 }));

  }

  viewProfile(profile: UserProfile, profileList: UserProfile[]) {

    this.profileObservableService.set(profileList);
    this.router.navigate(['/profile/', profile.id]);

  }

}
