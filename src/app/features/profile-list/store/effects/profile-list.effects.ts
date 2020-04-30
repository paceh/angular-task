import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfileListService } from '../../profile-list.service';

@Injectable()
export class ProfileListEffects {

    // tslint:disable-next-line:ter-arrow-body-style
    loadProfiles$ = createEffect(() => this.actions$.pipe(
        ofType('[ProfileList] Load ProfileList'),
        mergeMap(() => this.profileListService.getAll()
        .pipe(
            map((profiles: any) => ({ type: '[ProfileList] Load ProfileList Success', payload: profiles })),
            catchError(() => of({ type: '[ProfileList] Load ProfileList Failure' }))
        ))
        )
    );

    constructor (
        private actions$: Actions,
        private profileListService: ProfileListService
    ) {}

}
