import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => {
    return user;
});

export const getUserLoadingState = createSelector(getProfileState, ({ loading }) => {
    return loading;
})
