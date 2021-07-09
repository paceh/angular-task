import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserProfile } from '../interfaces';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ user }) => {

    return user;

});

export const getUserList = createSelector(getProfileState, ({ userMap }) => {

    const userProfiles: UserProfile[] = Object.keys(userMap).map((key: string) => userMap[key]);

    return userProfiles.sort((a: UserProfile, b: UserProfile) => {
        // sort by last name in ascending order
        let dateA = a.lastName.toLocaleUpperCase();
        let dateB = b.lastName.toLocaleUpperCase();

        if (dateA < dateB) {
            return -1;

        } else if (dateA > dateB) {
            return 1;

        } else {
            // sort by first name in ascending order
            let dateA = a.firstName.toLocaleUpperCase();
            let dateB = b.firstName.toLocaleUpperCase();

            if (dateA < dateB) {
                return -1;

            } else if (dateA > dateB) {
                return 1;

            } else {
                return 0;

            }
        }
    });

});
