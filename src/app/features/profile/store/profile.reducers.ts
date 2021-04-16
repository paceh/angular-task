import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
import { UserProfile } from '../interfaces';

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

const initialState: ProfileState = {};

const mapToUserProfile = (profile: any): UserProfile => {
    const data: UserProfile = {
        cellNumber: profile.cell,
        phoneNumber: profile.phone,
        city: profile.location.city,
        state: profile.location.state,
        dateOfBirth: profile.dob.date,
        picture: profile.picture.medium,
        email: profile.email,
        firstName: profile.name.first,
        lastName: profile.name.last,
    }
    return data;
};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };

    }),
    on(profileActions.initRandomProfile, (state, action) => {
        const user: UserProfile = mapToUserProfile(action.profile);
        
        return { ...state, user };

    }),
    on(profileActions.initRandomProfileList, (state, action) => {
        const users: UserProfile[] = action.profiles.map((user: any) => {
            return mapToUserProfile(user);
        });

        return { ...state, users };

    }),
    on(profileActions.setProfile, (state, action) => {
        const user = state.users.find((user: UserProfile) => action.email === user.email);

        return { ...state, user };

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
