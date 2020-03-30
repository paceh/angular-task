import { UserProfile } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
}


/**
 * list interface (not really required)
 */
export interface ProfileListState {
    list?: Array<UserProfile>;
}


/**
 * combine reducers
 */
export interface ProfileModuleState {
    user: ProfileState;  
    list: ProfileListState;
}