import { profileListActions } from './profile-list.actions';

describe('loadProfileListss', () => {

    it('should return an action', () => {

        expect(profileListActions.loadProfileList().type).toBe('[ProfileList] Load ProfileList');

    });

});
