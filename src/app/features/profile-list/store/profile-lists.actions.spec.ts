import * as fromProfileLists from './profile-lists.actions';

describe('loadProfileListss', () => {
  it('should return an action', () => {
    expect(fromProfileLists.loadProfileListss().type).toBe('[ProfileLists] Load ProfileListss');
  });
});
