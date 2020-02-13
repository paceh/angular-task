import { Component, OnInit } from '@angular/core';
import { getUserProfiles } from '@store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '@store/actions';
import { Router } from '@angular/router';

export interface tableUser {
  picture: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

  displayedColumns: string[] = ['picture', 'firstName', 'lastName'];
  users$ = this.store.select(getUserProfiles);
  seed: string;

  constructor (private store: Store<AppState>, private router: Router) {}

  ngOnInit () {
      // This will get a list of random users but also allow for retrieval of a profile
      // if the user is still on the detail page (if refreshing the page) after 
      // selecting a user from the profile list.
      // It has to be done this way due to the nature of the API being random

      // Generate random seed that will provide random results, but will be able to refresh the
      // profile detail page with the same profile
      this.seed = Math.random().toString(25).substring(2);

      this.store.dispatch(ProfileActions.initProfiles({seed: this.seed}));
  }

  /**
   * Navigate to the profile details page
   * @param profileIndex Position of the selected prfile within the profile list
   */
  goToProfile(profileIndex: number) {
      this.router.navigate(['profile', {seed: this.seed, profileIndex: profileIndex}]);
  }

}
