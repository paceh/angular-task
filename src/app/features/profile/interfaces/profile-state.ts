import { UserProfile } from './user-profile';

export interface UserProfileMap {
    [ id: string ]: UserProfile
}

export interface ProfileState {
    user?: UserProfile;
    userMap: UserProfileMap;
}
