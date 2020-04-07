import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const loadProfile = createAction('[Profile] Profile load');
const loadProfileSuccess = createAction('[Profile] Profile load Success ', props<{user: UserProfile}>());
const loadProfilesSuccess = createAction('[Profile] Profiles load Success ', props<{users: UserProfile[]}>());
const loadProfileFail = createAction('[Profile] Profile load Failure ');

export const ProfileActions = {
    loadProfile,
    loadProfileFail,
    loadProfileSuccess,
    loadProfilesSuccess,
};
