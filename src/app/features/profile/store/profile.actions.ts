import { createAction, props } from '@ngrx/store';

const initProfile = createAction('[Profile] Init');
const initRandomProfile = createAction('[Profile] Init Random', props<{ profile: any }>());
const initRandomProfileList = createAction('[Profile] Init Random List', props<{ profiles: any[] }>());
const setProfile = createAction('[Profile] Set Profile', props<{ email: string }>());

export const profileActions = { initProfile, initRandomProfile, initRandomProfileList, setProfile };
