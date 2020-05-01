import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const getProfile = createAction('[Profile] Get Profile');
const getProfileSuccess = createAction(
    '[Profile] Get Profile Success',
    props<{ user: UserProfile }>()
);
const getProfiles = createAction('[Profile] Get Profiles');
const getProfilesSuccess = createAction(
    '[Profile] Get Profiles Success',
    props<{ users: UserProfile[] }>()
);
const getProfileDetails = createAction(
    '[Profile] Get Profile Details',
    props<{ id: number }>()
);

export const profileActions = {
    getProfile,
    getProfileSuccess,
    getProfiles,
    getProfilesSuccess,
    getProfileDetails,
};
