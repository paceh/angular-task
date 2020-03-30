import { ProfileState, ProfileListState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';
// import { UserProfile } from '../interfaces';


// const dummyProfile: UserProfile = {
//     cellNumber: '888-888-8888',
//     city: 'Los Angeles',
//     dateOfBirth: 'Jan 1st, 1966',
//     email: 'test@crexi.com',
//     firstName: 'Me',
//     lastName: 'Last Name',
//     phoneNumber: '999-999-9999',
//     picture: '/content/img/default_user.png',
//     state: 'CA'
// };


const initialState: ProfileState = {};


const reducer = createReducer(
    initialState,
    // on(profileActions.initProfile, (state) => {
    //     return { ...state, user: dummyProfile };
    // }),


    /**
     * on success action
     * getting payload from profile.effects (random user API)
     * setting new state with new data from api
     */
    on(profileActions.successProfile, (state, { payload }: any) => {
        let user = payload.results[0];
        return { 
            ...state, 
            ...{
                id: user.id.value || Math.random().toString(16),
                cellNumber: user.cell,
                city: user.location.city,
                dateOfBirth: new Date(user.dob.date),
                email: user.email,
                firstName: user.name.first,
                lastName: user.name.last,
                phoneNumber: user.phone,
                picture: user.picture.medium,
                state: user.location.state
            }
        };
    })
);


// tslint:disable only-arrow-functions
export function getProfileReducer (
    state: ProfileState | undefined,
    action: Action
) {
    return reducer(state, action);
}


/**
 * reducer for profiles list
 */
const initListState: ProfileListState = { list: [] };
const reducer2 = createReducer(
    initListState,
    on(profileActions.successProfileList, (state, { payload }: any) => {
        return { 
            ...state, 
            list: payload.results.map((user: any) => {
                return {
                    id: user.id.value || Math.random().toString(16),
                    cellNumber: user.cell,
                    city: user.location.city,
                    dateOfBirth: new Date(user.dob.date),
                    email: user.email,
                    firstName: user.name.first,
                    lastName: user.name.last,
                    phoneNumber: user.phone,
                    picture: user.picture.medium,
                    state: user.location.state
                }
            })
        };
    })
);


export function getProfileListReducer (
    state: ProfileListState | undefined, 
    action: Action
) {
    return reducer2(state, action);
}
