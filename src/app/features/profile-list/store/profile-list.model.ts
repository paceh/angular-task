import { UserProfile } from './../../profile/interfaces/user-profile';
import { EntityState } from '@ngrx/entity';

export interface ProfileListState extends EntityState<UserProfile> {
    error: string;
    loaded: boolean;
    loading: boolean;
    selectId: any;
}
