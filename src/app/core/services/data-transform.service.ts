import { Injectable } from '@angular/core';

import { UserProfile } from '@features/profile/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataTransformService {

    constructor() { }

    userToUserProfile = (user: any): UserProfile => {
        let userProfile: UserProfile;

        if (user) {
            userProfile = {
                id: user.login? user.login.uuid: '',
                dateOfBirth: user.dob? user.dob.date: '',
                phoneNumber: user.phone,
                cellNumber: user.cell,
                email: user.email,
                picture: user.picture? user.picture.medium: '',
                firstName: user.name? user.name.first: '',
                lastName: user.name? user.name.last: '',
                state: user.location? user.location.state: '',
                city: user.location? user.location.city: ''
            };
        }

        return userProfile;
    };

}
