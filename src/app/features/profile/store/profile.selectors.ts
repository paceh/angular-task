import { ProfileState, ProfileListState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';



export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getProfile = createSelector(getProfileState, ({ user }) => {
    return user;
});



/**
 * selectors for profiles
 */
export const getProfileListState = createFeatureSelector<ProfileListState>('profile');
export const getProfileList = createSelector(getProfileListState, ({ list }) => {
    return list;
});

