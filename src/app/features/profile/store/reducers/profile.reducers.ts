import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from '@features/profile/store/actions';

const initialState: ProfileState = {
    user: void 0,
    users: []
};

const reducer = createReducer(
    initialState,
    on(ProfileActions.loadProfile, (state) => {
        return { ...state };
    }),
    on(ProfileActions.loadProfileSuccess, (state, { user }) => {

        return { ...state, user };
    }),
    on(ProfileActions.loadProfilesSuccess, (state, { users }) => {

        return { ...state, users };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
