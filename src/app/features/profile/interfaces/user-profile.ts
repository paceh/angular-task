export interface UserProfile {
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;
}

export interface RawUserProfile {
    cell: string;
    dob: any;
    email: string;
    gender: string;
    id: any;
    location: any;
    login: any;
    name: any;
    nat: string;
    phone: string;
    picture: any;
    register: any;
}

export interface UserListItem {
    id: string;
    user: UserProfile;
}