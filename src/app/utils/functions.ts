import { UserProfile } from '@interfaces';
import * as moment from 'moment';

export function MapResponseToUserProfile(response: any): UserProfile {
    return {
        ...response,
        cellNumber: response.cell,
        city: response.location.city,
        dateOfBirth: moment(response.dob.date).format('MMMM Do, YYYY'),
        firstName: response.name.first,
        lastName: response.name.last,
        phoneNumber: response.phone,
        picture: response.picture.large,
        state: response.location.state
    }
}