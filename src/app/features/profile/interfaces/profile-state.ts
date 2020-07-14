import { UserProfile } from './user-profile';

export interface ProfileState {
    error: string;
    loaded: boolean;
    loading: boolean;
    user?: UserProfile;
}
