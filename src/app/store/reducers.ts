import { InjectionToken } from '@angular/core';
import * as fromRouting from '@core/routing/store/routing.reducers';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {
    routing: fromRouting.State;
}

export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App Reducers', {
    factory: () => {

        return { routing: fromRouting.reducer };

    }
});

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function logger (reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return (state: AppState, action: any): AppState => {

        // console.log('%c NGRX action ', loggerStyles, action, state);

        return reducer(state, action);

    };

}

export const metaReducers: MetaReducer<AppState>[] = [logger];
