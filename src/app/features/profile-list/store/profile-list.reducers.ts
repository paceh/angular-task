import { UserProfile } from './../../profile/interfaces/user-profile';
import { Action, createReducer, on } from '@ngrx/store';

import { createEntityAdapter } from '@ngrx/entity';
import { ProfileListState } from './profile-list.model';
import { profileListActions } from './profile-list.actions';

export const adapter = createEntityAdapter<UserProfile>({
    selectId: (user: UserProfile) => user.id
});

const initialProfileListState: ProfileListState = adapter.getInitialState({
    error: null,
    loaded: false,
    loading: false,
    selectId: null
});

const reducer = createReducer(
    initialProfileListState,
    on(profileListActions.load, (state) => {

        return {
            ...state,
            loaded: false,
            loading: true
        };

    }),
    on(profileListActions.loadSuccess, (state, { profiles }) => {

        return adapter.addAll(profiles, {
            ...state,
            loaded: true,
            loading: false,
            error: null
        });

    }),
    on(profileListActions.loadFail, (state, { error }) => {

        return {
            ...state,
            loaded: true,
            loading: false,
            error
        };

    }),
    on(profileListActions.clear, (state, { }) => {

        return adapter.removeAll(state);

    })

);

export const getProfileListReducer = (state: ProfileListState | undefined, action: Action) => {

    return reducer(state, action);

};
