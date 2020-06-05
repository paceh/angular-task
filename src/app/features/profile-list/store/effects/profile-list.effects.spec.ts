import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProfileListEffects } from './profile-list.effects';

describe('ProfileListEffects', () => {
  let actions$: Observable<any>;
  let effects: ProfileListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ProfileListEffects>(ProfileListEffects

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
