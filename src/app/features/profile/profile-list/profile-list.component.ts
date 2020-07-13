import { Component, OnInit, OnDestroy } from '@angular/core';
import { profileActions } from '../store/profile.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getProfileList } from '../store/profile.selectors';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit, OnDestroy {

  users$ = this.store.select(getProfileList);
  sub: Subscription;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.sub = this.users$.subscribe(users => {
      if (!users) {
        this.store.dispatch(profileActions.getProfileList());
      }
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onUserClicked(index: number) {
    this.router.navigate([`/profile/${index}`])
  }

}
