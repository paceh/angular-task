import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getProfile = createSelector(getProfileState, ({ user }) => {

    return user;

});


export const getProfileById = (id: number) => createSelector(getProfileState, ({ users }) => {

    return users && users.length > id ? users[id] : null;

});

export const getProfileList = createSelector(getProfileState, ({ users }) => {

    return users;

});