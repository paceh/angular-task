import { UserProfile, UserListItem } from './user-profile';

export interface ProfileState {
    user?: UserProfile;
    loading?: boolean;
    userList?: UserListItem[];
}
