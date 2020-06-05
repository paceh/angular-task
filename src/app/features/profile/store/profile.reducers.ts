import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.loadProfileSuccess, ((state: ProfileState, data: any) => {

        const user = data.payload.results[0];
        return {
            ...state,
            user
        };
    }))
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
