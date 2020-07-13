import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.getRandomProfileSuccess, (state, { payload }) => {

        return { ...state, user: payload };

    }),
    on(profileActions.getProfileListSuccess, (state, { payload }) => {

        return { ...state, users: payload };

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer(state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
