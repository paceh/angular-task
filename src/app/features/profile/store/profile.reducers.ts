import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';

const initialState: ProfileState = {
    user: void {},
    users: [],
};

const reducer = createReducer(
    initialState,
    on(profileActions.getProfile, (state) => {
        return { ...state };
    }),
    on(profileActions.getProfileSuccess, (state, { user }) => {
        return { ...state, user };
    }),
    on(profileActions.getProfiles, (state) => {
        return { ...state };
    }),
    on(profileActions.getProfilesSuccess, (state, { users }) => {
        return { ...state, users };
    }),
    on(profileActions.getProfileDetails, (state, { id }) => {
        return { ...state, user: state.users.find((u) => u.id === id) };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer(
    state: ProfileState | undefined,
    action: Action
) {
    return reducer(state, action);
}
