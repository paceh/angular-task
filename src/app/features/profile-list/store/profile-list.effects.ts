import { ProfileList } from './../interfaces/profile-list';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY as empty, of } from 'rxjs';
import { catchError,map, switchMap } from 'rxjs/operators';
import * as ProfileListActions from './profile-list.action';
import { ProfileListService } from './../profile-list.service';
import { userlist } from './profile-list.reducers';

@Injectable()
export class ProfileListEffect {
  search$ = createEffect(
    () => ({} = {}) =>
      this.profileListactions$.pipe(
        ofType(ProfileListActions.getUsersList),
        switchMap(({ query }) => {
          if (query === '') {
            return empty;
          }

          return this.profileListService.getProfileById(query).pipe(
            map((profilelist: ProfileList[]) => userlist(userlist.userId),
            catchError(err =>
              of(({ errorMsg: err.message }))
            )
          );
        })
      )
  );

  constructor(
    private profileListactions$: Actions,
    private profileListService: ProfileListService
  ) {}
}