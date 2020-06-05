import { ProfileListState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfilesState = createFeatureSelector<ProfileListState>('profiles');

export const getProfiles = createSelector(getProfilesState, ({ data }) => {

    return data;

});

export const getUserProfileDetails = createSelector(getProfilesState, ({ user }) => {

    return user;

});
