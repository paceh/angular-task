import { createAction, props } from '@ngrx/store';
import { UserProfile } from './../interfaces/user-profile';

const initProfile = createAction('[Profile] Profile Init');
const initProfileSuccess = createAction('[Profile] Profile Init Success', props<{user: UserProfile}>());

const initProfiles = createAction('[Profiles] Profiles Init');
const initProfilesSuccess = createAction('[Profiles] Profiles Init Success', props<{users: UserProfile[]}>());

export const ProfileActions = { initProfile, initProfileSuccess, initProfiles, initProfilesSuccess };
