import { UserProfile } from '@features/profile/interfaces/user-profile';

export interface ProfileState {
    user?: UserProfile;
    users?: UserProfile[];
}
