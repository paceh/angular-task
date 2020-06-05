import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const initProfile = createAction('[Profile] Init');

const loadRandomProfile = createAction('[Profile] Load Random')
const loadRandomProfileSuccess = createAction('[Profile] Load Random Success', props<{ user: UserProfile }>())

export const profileActions = { 
  initProfile, 
  loadRandomProfile,
  loadRandomProfileSuccess,
};
