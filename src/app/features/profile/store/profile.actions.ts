import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

// action types
export enum ProfileActionTypes {
    LOAD = '[Profile] Load',
    LOAD_SUCCESS = '[Profile] Load Success',
    LOAD_FAIL = '[Profile] Load Fail',
    SET = '[Profile] Set'
}

const load = createAction(ProfileActionTypes.LOAD);
const loadFail = createAction(ProfileActionTypes.LOAD_FAIL, props<{ error: string }>());
const loadSuccess = createAction(ProfileActionTypes.LOAD_SUCCESS,
    props<{ profile: UserProfile }>());
const set = createAction(ProfileActionTypes.SET,
    props<{ profile: UserProfile }>());

export const profileActions = {
    load,
    loadFail,
    loadSuccess,
    set
};
