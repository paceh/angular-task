import { createAction } from '@ngrx/store';


const initProfile = createAction('[Profile] Init');


/**
 * success action (when new data is received from random user api)
 */
const successProfile = createAction('[Profile] Success');



/**
 * profile list
 */
const initProfileList = createAction('[ProfileList] Init');
const successProfileList = createAction('[ProfileList] Success');


export const profileActions = { 
    initProfile, 
    successProfile,
    initProfileList,
    successProfileList
};
