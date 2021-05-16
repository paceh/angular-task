import { createAction, props, union } from '@ngrx/store';

import { UserProfile } from '../interfaces';

export const initProfile = createAction(
    '[Profile] initProfile'
);

export const initProfileSuccess = createAction(
    '[Profile] initProfileSuccess',
    props<{ userProfile: UserProfile }>()
);

export const initProfileFailure = createAction(
    '[Profile] initProfileFailure',
    props<{ message: string }>()
);

export const loadProfileList = createAction(
    '[Profile] loadProfileList'
);

export const loadProfileListSuccess = createAction(
    '[Profile] loadProfileListSucess',
    props<{ userProfiles: UserProfile[] }>()
);

export const loadProfileListFailure = createAction(
    '[Profile] loadProfileListFailure',
    props<{ message: string }>()
);

export const selectProfile = createAction(
    '[Profile] selectProfile',
    props<{ id: string }>()
);

const allActions = union({
    initProfile,
    initProfileSuccess,
    initProfileFailure,
    loadProfileList,
    loadProfileListSuccess,
    loadProfileListFailure,
    selectProfile
});

export type Actions = typeof allActions;
