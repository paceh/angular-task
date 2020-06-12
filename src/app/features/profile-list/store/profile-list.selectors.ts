import * as fromProfileList from './profile-list.reducers';
import { ProfileListFeatureState, selectProfileList } from './../profile-list.state';
import { createSelector } from '@ngrx/store';

export const profilesListBrowse = createSelector(
    selectProfileList,
    (state: ProfileListFeatureState) => state.list
);

export const getListLoading = createSelector(profilesListBrowse, (state) => state.loading);
export const getListLoaded = createSelector(profilesListBrowse, (state) => state.loaded);
export const getListError = createSelector(profilesListBrowse, (state) => state.error);

export const {
    selectAll: profileList,
    selectEntities: profileEntities,
} = fromProfileList.adapter.getSelectors(profilesListBrowse);