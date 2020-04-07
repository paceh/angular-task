import { UserProfile } from '@interfaces';

export class UserProfileModel implements UserProfile {
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;

    constructor (data: { [k: string]: any } = {}) {
        this.city = data.location.city;
        this.state = data.location.state;
        this.picture = data.picture.medium;
        this.email = data.email;
        this.firstName = data.name.first;
        this.lastName = data.name.last;
        this.cellNumber = data.cell;
        this.dateOfBirth = data.dob.date;
        this.phoneNumber = data.phone;
    }
}
