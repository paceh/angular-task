import { createAction, props } from '@ngrx/store';

export const loadProfileListss = createAction(
  '[ProfileLists] Load ProfileListss'
);

export const loadProfileListssSuccess = createAction(
  '[ProfileLists] Load ProfileListss Success',
  props<{ data: any }>()
);

export const loadProfileListssFailure = createAction(
  '[ProfileLists] Load ProfileListss Failure',
  props<{ error: any }>()
);
