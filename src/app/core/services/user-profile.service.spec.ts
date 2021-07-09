import { of } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserProfileService, RandomUsersResponse } from './user-profile.service';

describe('UserProfileService', () => {
    let service: UserProfileService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                UserProfileService
            ]
        });

        service = TestBed.get(UserProfileService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should test getUserProfiles$', () => {
        const response: RandomUsersResponse = {
            info: {},
            results: [
                {
                    id: '1234567',
                    cellNumber: '888-888-8888',
                    city: 'Los Angeles',
                    dateOfBirth: 'Jan 1st, 1966',
                    email: 'test@crexi.com',
                    firstName: 'First Name',
                    lastName: 'Last Name',
                    phoneNumber: '999-999-9999',
                    picture: '/content/img/default_user.png',
                    state: 'CA'
                }
            ]
        };
        const spy = spyOn(service, 'getUserProfiles$').and.returnValue(of(response));
        service.getUserProfiles$().toPromise().then((result) => {
            expect(result).toEqual(response);
        });
        expect(spy).toHaveBeenCalledWith();
    });
});
