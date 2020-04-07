import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    userProfileUrl = 'https://randomuser.me/api/';

    constructor(private http: HttpClient) {}

    getUserProfile(): Observable<any> {
        return this.http.get<UserProfile>(this.userProfileUrl);
    }

    getUserProfiles(): Observable<any> {
        return this.http.get<UserProfile[]>(
            `${this.userProfileUrl}?results=10`
        );
    }
}
