import { ProfileListState } from '../interfaces/profile-list-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileListState>('profile-list');

export const getUsersList = createSelector(getProfileState, ({ usersList }) => {
    return usersList;

});
export const getUserById = createSelector(getProfileState, ({ userId }) => {
    return userId;

});
