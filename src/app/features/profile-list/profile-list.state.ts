import { AppState } from './../../store/reducers';

import { ProfileListState } from './store/profile-list.model';
import { createFeatureSelector, compose, combineReducers } from '@ngrx/store';

import { getProfileListReducer } from './store/profile-list.reducers';

export const FEATURE_NAME_PROFILE_LIST = 'ProfileListCatalog';

export const profieListFeatureReducer = (state: any, action: any) => {

    return compose(combineReducers)({
        list: getProfileListReducer

    })(state, action);

};

export interface ProfileListFeatureState {
    list: ProfileListState;
}

export interface State extends AppState {
    ProfileListCatalog: ProfileListFeatureState;
}

export const selectProfileList = createFeatureSelector<State, ProfileListFeatureState>(
    FEATURE_NAME_PROFILE_LIST
);
