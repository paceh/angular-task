import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

 
@Injectable()
export class ProfileEffects {


    constructor(
        private actions$: Actions,
        private _http: HttpClient
    ) {}

    
    /**
     * We need effect to pull data from random user api
     */
    loadProfile$ = createEffect(() => this.actions$.pipe(


        /**
         * to connect with correct acton type
         */
        ofType('[Profile] Init'),


        /**
         * calling randomuser api
         */
        mergeMap(() => this._http.get('https://randomuser.me/api')


        /**
         * we need .pipe in order to use map
         */
        .pipe(
            map((profile: any) => ({ 


                /**
                 * pushing results to success action
                 */
                type: '[Profile] Success', payload: profile
            })),


            /**
             * catching errors
             */
            catchError(() => EMPTY)
        )))
    );


    /**
     * same for profile list
     */
    loadProfileList$ = createEffect(() => this.actions$.pipe(
        ofType('[ProfileList] Init'),
        mergeMap(() => this._http.get('https://randomuser.me/api?results=10')
        .pipe(
            map((profiles: any) => ({ 
                type: '[ProfileList] Success', payload: profiles
            })),
            catchError(() => EMPTY)
        )))
    );
}