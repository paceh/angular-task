import { Action, createReducer, on } from '@ngrx/store';
import { profileListActions } from '../profile-list.actions';
import { ProfileListState } from '../../interfaces';
import { UserProfile } from '@features/profile/interfaces';

export const profileListFeatureKey = 'profileList';

const initialState: ProfileListState = {
    data: [],
    error: undefined,
    user: undefined
};

const reducer = createReducer(
    initialState,
    // tslint:disable-next-line:ter-arrow-body-style
    on(profileListActions.loadProfileListSuccess, ((state: ProfileListState, data: any) => {
        console.log('-- data.payload: ', data.payload.results);
        const results = data.payload.results.map((item: UserProfile, index: number) => {
            item.id = index + 1;
            return item;
        });
        return {
            ...state,
            data: results,
            error: undefined
        };
    })),
    // tslint:disable-next-line:ter-arrow-body-style
    on(profileListActions.loadProfileListFailure, (state: ProfileListState, data: any) => ({
        ...state,
        data: [],
        error: data.error
    })),
    on(profileListActions.loadProfileDetails, ((state: ProfileListState, data: any) => {

        const user = state.data.filter((item: UserProfile) => item.id === parseInt(data.id, 10));
        if (!user.length) {

            window.location.href = '/profile';

        }
        return {
            ...state,
            error: undefined,
            user: user[0]
        };

    }))
);

export const profileListReducer = (state: ProfileListState, action: Action) => {

    return reducer(state, action);

};
