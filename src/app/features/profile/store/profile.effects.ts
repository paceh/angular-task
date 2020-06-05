import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { profileActions } from './profile.actions';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProfileEffects {
  // NOTE: TypeScript issues. Used any for development speed.
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

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) { }
}