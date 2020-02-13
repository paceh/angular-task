import { createAction, props } from '@ngrx/store';
import { UserProfile } from './../interfaces/user-profile';

const initProfile = createAction('[Profile] Profile Init');
const initProfileSuccess = createAction('[Profile] Profile Init Success', props<{user: UserProfile}>());

const initProfiles = createAction('[Profiles] Profiles Init', props<{seed: string}>());
const initProfilesSuccess = createAction('[Profiles] Profiles Init Success', props<{users: UserProfile[]}>());

const selectedProfile = createAction('[Profile] Selected Profile', props<{seed: string, profileIndex: number}>());
const selectedProfileSuccess = createAction('[Profile] Selected Profile Success', props<{user: UserProfile}>());


export const ProfileActions = { 
    initProfile, 
    initProfileSuccess, 
    initProfiles, 
    initProfilesSuccess,
    selectedProfile,
    selectedProfileSuccess
};
