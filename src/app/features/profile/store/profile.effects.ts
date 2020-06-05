import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfileService } from '../profile.service';

@Injectable()
export class ProfileEffects {

    // tslint:disable-next-line:ter-arrow-body-style
    loadProfile$ = createEffect(() => this.actions$.pipe(
        ofType('[Profile] load'),
        mergeMap(() => this.profileService.getMyProfile()
        .pipe(
            map((data: any) => ({ type: '[Profile] load Success', payload: data })),
            catchError(() => of({ type: '[Profile] load Failure' }))
        ))
        )
    );

    constructor (
        private actions$: Actions,
        private profileService: ProfileService
    ) {}

}
