import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './profile.actions';

const initialState: ProfileState = {
    user: null,
    users: []
};

const reducer = createReducer(
    initialState,
    on(ProfileActions.initProfile, ProfileActions.initProfiles, (state) => {
        return { ...state };
    }),
    on(ProfileActions.initProfileSuccess, (state, { user }) => {
        return { ...state, user: user };
    }),
    on(ProfileActions.initProfilesSuccess, (state, { users }) => {
        return { ...state, users: users };
    }),
    on(ProfileActions.selectedProfileSuccess, (state, { user }) => {
        return { ...state, user: user };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
