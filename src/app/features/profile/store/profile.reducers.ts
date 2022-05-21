import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { UserProfile } from '../interfaces';
import { initProfile, initProfileFailure, initProfileSuccess } from "./profile.actions";

const dummyProfile: UserProfile = {
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = {
    loading: true,
};

const reducer = createReducer(
    initialState,
    on(initProfile, (state) => {

        return { ...state, user: dummyProfile, loading: true };

    }),
    on(
        initProfileSuccess,
        (state, action) => {
            console.log('action.payload -', action)
            return {...state, user: action.user, loading: false}
        }
    ),
    on(
        initProfileFailure,
        (state, action) => {
            console.error('ERROR: ', action.error)
            return {...state, loading: false}
        }
    )
);

// eslint-disable  prefer-arrow/prefer-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
