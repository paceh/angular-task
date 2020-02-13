import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './profile.actions';

const initialState: ProfileState = {
    user: null,
    users: [],
    seed: null
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
    on(ProfileActions.selectedProfile, (state, { seed, profileIndex }) => {
        // console.log('neew seed', seed);
        // console.log('new index', profileIndex);
        const selectedUser = state.users[profileIndex];
        return { ...state, user: selectedUser };
    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
