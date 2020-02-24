import { ProfileList } from './../interfaces/profile-list';
import * as ProfileListActions from './profile-list.action';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

export interface State extends EntityState<ProfileList> {
  selectedUserId: string | null;
}
export const userList: EntityAdapter<ProfileList> = createEntityAdapter<ProfileList>({
    selectId: (profileList: ProfileList) => profileList.usersList,
    sortComparer: false,
  });
export const initialState: State = userList.getInitialState({
    selectedUserId: null,
});

export const reducer = createReducer(
  initialState,
    on(ProfileListActions.GetUsersList, (state, { userList }) => adapter.userlist(userList, state)),
    on(ProfileListActions.getUsersById, (state, { userId }) => ({
        ...state,
        selectedUserId: userId,
    }))
);
export const selectId = (state: State) => state.selectedUserId;