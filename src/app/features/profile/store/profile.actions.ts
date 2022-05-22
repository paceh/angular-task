import { createAction, props, union } from '@ngrx/store';
import { UserListItem, UserProfile } from '../interfaces';

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

export const initProfileList = createAction(
    '[Profile] Init List'
);

export const initProfileListSuccess = createAction(
    '[Profile] Init List Success',
    props<{ userList: UserListItem[] }>()
);

export const initProfileListFailure = createAction(
    '[Profile] Init List Failure',
    props<{ error: any }>()
);

export const refreshProfileList = createAction(
    '[Profile] Refresh User List',
);

const all = union({
    initProfile,
    initProfileSuccess,
    initProfileFailure,
    initProfileList,
    initProfileListSuccess,
    initProfileListFailure,
    refreshProfileList,
})

export type ProfileAction = typeof all;
