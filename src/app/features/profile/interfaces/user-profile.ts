export interface UserProfile {
    cell: string;
    dob: {
        age: number;
        date: string;
    };
    email: string;
    gender: string;
    id: number;
    location: {
        city: string;
        postcode: string;
        state: string;
        street: string;
    };
    name: {
        first: string;
        last: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
