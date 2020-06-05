import { createAction, props } from '@ngrx/store';

const loadProfileList = createAction(
  '[ProfileList] Load ProfileList'
);

const loadProfileListSuccess = createAction(
  '[ProfileList] Load ProfileList Success',
  props<{ payload: any }>()
);

const loadProfileListFailure = createAction(
  '[ProfileList] Load ProfileList Failure',
  props<{ error: any }>()
);

const loadProfileDetails = createAction(
    '[ProfileList] Load Profile Detail',
    props<{ id: any }>()
);

export const profileListActions = {
    loadProfileDetails,
    loadProfileList,
    loadProfileListFailure,
    loadProfileListSuccess
};
