import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const getRandomProfile = createAction('[Profile] Get Random');
const getRandomProfileSuccess = createAction('[Profile] Get Random Success', props<{ payload: UserProfile }>());
const getProfileList = createAction('[Profile] Get List');
const getProfileListSuccess = createAction('[Profile] Get List Success', props<{ payload: UserProfile[] }>());
const getProfileError = createAction('[Profile] Get Error', props<Error>());

export const profileActions = { getRandomProfile, getRandomProfileSuccess, getProfileList, getProfileListSuccess, getProfileError };
