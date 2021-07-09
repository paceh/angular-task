import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataTransformService } from './data-transform.service';

describe('DataTransformService', () => {
    let service: DataTransformService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                DataTransformService
            ]
        });

        service = TestBed.get(DataTransformService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should test userToUserProfile', () => {
        const rawUserData = {
            name: {
                title: 'Ms',
                first: 'Erin',
                last: 'Daniels'
            },
            location: {
                street: {
                    number: 1369,
                    name: 'Photinia Ave'
                },
                city: 'Rockhampton',
                state: 'Northern Territory',
                country: 'Australia',
                postcode: 3990,
                coordinates: {
                    latitude: '-83.2831',
                    longitude: '1.3002'
                },
                timezone: {
                    offset: '+5:30',
                    description: 'Bombay, Calcutta, Madras, New Delhi'
                }
            },
            email: 'erin.daniels@example.com',
            login: {
                uuid: '53fb29b5-f69b-4679-97d2-cd627263c6a5',
                username: 'blackrabbit877',
                password: 'skippy',
                salt: 'zJQABMwB',
                md5: 'ae38cd52365563674c2f04aefc082aac',
                sha1: '9420fb203a7c04f28a043f10fb8fc1d69ee62778',
                sha256: 'aa96ef33b123cab87b2ffe725c805a18df2097f1fc74e4eea3d0dbdb0d5f4ea4'
            },
            dob: {
                date: '1965-11-27T05:31:02.379Z',
                age: 56
            },
            phone: '01-4273-6364',
            cell: '0479-312-245',
            picture: {
                large: 'https://randomuser.me/api/portraits/women/47.jpg',
                medium: 'https://randomuser.me/api/portraits/med/women/47.jpg',
                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/47.jpg'
            }
        };

        const userProfile = {
            id: '53fb29b5-f69b-4679-97d2-cd627263c6a5',
            dateOfBirth: '1965-11-27T05:31:02.379Z',
            phoneNumber: '01-4273-6364',
            cellNumber: '0479-312-245',
            email: 'erin.daniels@example.com',
            picture: 'https://randomuser.me/api/portraits/med/women/47.jpg',
            firstName: 'Erin',
            lastName: 'Daniels',
            state: 'Northern Territory',
            city: 'Rockhampton'
        };
        const user = service.userToUserProfile(rawUserData);
        expect(user).toEqual(userProfile);
    });
    
});

