import { UserProfile } from '@features/profile/interfaces';

export interface ProfileListState {
    data: Array<UserProfile>;
    error: String;
    user: UserProfile;
}
