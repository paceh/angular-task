import { createAction, props, union } from '@ngrx/store';
import { UserProfile } from '../interfaces';

export const initProfile = createAction(
    '[Profile] Init'
);

export const initProfileSuccess = createAction(
    '[Profile] Init Success',
    props<{ user: UserProfile }>()
);

export const initProfileFailure = createAction(
    '[Profile] Init Failure',
    props<{ error: any }>()
);

const all = union({
    initProfile,
    initProfileSuccess,
    initProfileFailure,
})

export type ProfileAction = typeof all;
