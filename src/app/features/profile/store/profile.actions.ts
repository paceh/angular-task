import { createAction, props } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');
const initRandomProfile = createAction('[Profile] Init Random', props<{ profile: any }>());

export const profileActions = { initProfile, initRandomProfile };
