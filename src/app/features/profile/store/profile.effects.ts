import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { profileActions } from './profile.actions';
import { map, catchError, exhaustMap, withLatestFrom, filter } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { getUserProfiles } from './profile.selectors';

@Injectable()
export class ProfileEffects {
  // NOTE: TypeScript issues on createEffect. Used any for development speed.
  randomProfile$ = createEffect<any, any, any, any>(() =>
    this.actions$.pipe(
      ofType(profileActions.loadRandomProfile.type),
      exhaustMap(_ =>
        this.profileService.getRandom().pipe(
          map(user => profileActions.loadRandomProfileSuccess({ user })),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  randomProfiles$ = createEffect<any, any, any, any>(() =>
    this.actions$.pipe(
      ofType(profileActions.loadRandomProfiles.type),
      withLatestFrom(this.store.select(getUserProfiles)),
      filter(([ _, users ]) => !Array.isArray(users) || users.length < 1),
      exhaustMap(_ =>
        this.profileService.getManyRandom().pipe(
          map(users => profileActions.loadRandomProfilesSuccess({ users })),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private profileService: ProfileService,
  ) { }
}