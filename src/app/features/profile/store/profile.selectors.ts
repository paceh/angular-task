import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => {
    return user;
});

export const getLoadingState = createSelector(getProfileState, ({ loading }) => {
    return loading;
})

export const getUserList = createSelector(getProfileState, ({ userList }) => {
  return userList;  
})
