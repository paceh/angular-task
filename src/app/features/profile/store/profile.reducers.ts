import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { profileActions } from '@store/actions';


const initialState: ProfileState = {

    error: null,
    loaded: false,
    loading: false,
    user: null

};

const reducer = createReducer(
    initialState,
    on(profileActions.load, (state) => {

        return {
            ...state,
            loaded: false,
            loading: true
        };

    }),
    on(profileActions.loadSuccess, (state, { profile }) => {

        return {
            ...state,
            user: profile,
            loaded: true,
            loading: false,
            error: null
        };

    }),
    on(profileActions.loadFail, (state, { error }) => {

        return {
            ...state,
            loaded: true,
            loading: false,
            error
        };

    }),
    on(profileActions.set, (state, { profile }) => {

        return {
            ...state,
            user: profile
        };

    })
);



export const getProfileReducer = (state: ProfileState | undefined, action: Action) => {

    return reducer(state, action);

};
