
import { createAction, props } from '@ngrx/store';

const loadProfile = createAction(
  '[Profile] load'
);

const loadProfileSuccess = createAction(
  '[Profile] load Success',
  props<{ payload: any }>()
);

const loadProfileFailure = createAction(
  '[Profile] load Failure',
  props<{ error: any }>()
);

export const profileActions = {
    loadProfile,
    loadProfileFailure,
    loadProfileSuccess
};
