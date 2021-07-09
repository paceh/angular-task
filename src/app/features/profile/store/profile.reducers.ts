import { Action, createReducer, on } from '@ngrx/store';

import { ProfileState, UserProfileMap } from '@interfaces';
import { UserProfile } from '../interfaces';

import * as ProfileActions from '@store/actions';

const initialState: ProfileState = {
    user: null,
    userMap: {}
};

const reducer = createReducer(
    initialState,

    on(ProfileActions.initProfileSuccess, (state: ProfileState, { userProfile }) => ({
        ...state,
        user: { ...userProfile }
    })),

    on(ProfileActions.initProfileFailure, (state: ProfileState) => ({
        ...state,
        user: { ...initialState.user }
    })),

    on(ProfileActions.loadProfileListSuccess, (state: ProfileState, { userProfiles }) => ({
        ...state,
        userMap: userProfiles.reduce((userProfileMap: UserProfileMap, userProfile: UserProfile) => ({
            ...userProfileMap,
            [ userProfile.id ]: { ...userProfile }
        }), {})
    })),

    on(ProfileActions.loadProfileListFailure, (state: ProfileState) => ({
        ...state,
        userMap: {}
    })),

    on(ProfileActions.selectProfile, (state: ProfileState, { id }) => ({
        ...state,
        user: state.userMap[id]? { ...state.userMap[id] }: null
    }))

);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
