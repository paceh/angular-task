import { ProfileList } from './../interfaces/profile-list';
import { Action } from '@ngrx/store'

export const getUsersList       = '[ProfileList] Load'
export const getUsersById    = '[ProfileList] LoadUsersById'

export class GetUsersList implements Action {
    readonly type = getUsersList

    constructor(public payload: ProfileList) {}
}

export class getUserById implements Action {
    readonly type = getUsersById
    constructor(public payload: number) {}
}

export type Actions = GetUsersList | getUserById