import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@features/profile/interfaces/user-profile';

export enum ProfileListActionTypes {
    LOAD = '[Profile List] Load',
    LOAD_SUCCESS = '[Profile List] Load Success',
    LOAD_FAIL = '[Profile List] Load Fail',
    CLEAR = '[Profile List] Clear'
}

const load = createAction(ProfileListActionTypes.LOAD, props<{ pageSize: number }>());
const loadSuccess = createAction(ProfileListActionTypes.LOAD_SUCCESS,
    props<{ profiles: UserProfile[] }>());
const loadFail = createAction(ProfileListActionTypes.LOAD_FAIL, props<{ error: string }>());
const clear = createAction(ProfileListActionTypes.CLEAR);

export const profileListActions = {
    clear,
    load,
    loadFail,
    loadSuccess
};
