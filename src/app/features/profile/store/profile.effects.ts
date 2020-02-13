import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProfileService } from './../profile.service';
import { ProfileActions } from './profile.actions';
import { UserProfile } from './../interfaces/user-profile';

@Injectable()
export class ProfileEffects {

  getUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.initProfile),
    exhaustMap(() => this.profileService.getRandomProfile()
      .pipe(
        map(user => ProfileActions.initProfileSuccess(responseToUserProfile(user))),
        catchError(() => EMPTY)
      ))
    )
  );

  getUserProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.initProfiles),
    exhaustMap(seed => this.profileService.getRandomProfiles(seed.seed)
      .pipe(
        map(users => ProfileActions.initProfilesSuccess(responseToUserProfiles(users))),
        catchError(() => EMPTY)
      ))
    )
  );

  // getSelectedProfile$ = createEffect(() => this.actions$.pipe(
  //   ofType(ProfileActions.selectedProfile),
  //   exhaustMap(() => this.profileService.getRandomProfiles()
  //     .pipe(
  //       map(users => ProfileActions.selectedProfilesSuccess(responseToUserProfiles(users))),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}

function responseToUserProfile(apiResponse: any): { user: UserProfile }  {
    const firstRandomUser = {...apiResponse.results[0]};
    const user: UserProfile = {
        cellNumber: firstRandomUser.cell,
        city: firstRandomUser.location.city,
        dateOfBirth: firstRandomUser.dob.date,
        email: firstRandomUser.email,
        firstName: firstRandomUser.name.first,
        lastName: firstRandomUser.name.last,
        phoneNumber: firstRandomUser.phone,
        picture: firstRandomUser.picture.medium,
        state: firstRandomUser.location.state
    }

    return { user };
}

function responseToUserProfiles(apiResponse: any): { users: UserProfile[] } {
  const randomUsers = {...apiResponse.results};
  const userLength = Object.keys(randomUsers).length;
  const users: UserProfile[] = [];
  for(let i = 0; i < userLength; i++) {
    const randomUser: UserProfile = {
        cellNumber: randomUsers[i].cell,
        city: randomUsers[i].location.city,
        dateOfBirth: randomUsers[i].dob.date,
        email: randomUsers[i].email,
        firstName: randomUsers[i].name.first,
        lastName: randomUsers[i].name.last,
        phoneNumber: randomUsers[i].phone,
        picture: randomUsers[i].picture.medium,
        state: randomUsers[i].location.state
    }
    users.push(randomUser);
  }  
  return { users };
}

