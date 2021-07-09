import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractHttpClient } from './abstract-http-client';

export interface RandomUsersResponse {
    info: any,
    results: any[]
}

@Injectable({
    providedIn: 'root'
})
export class UserProfileService extends AbstractHttpClient {

    constructor(private httpClient: HttpClient) {
        super();
    }

    getUserProfiles$ = (count: number = 1): Observable<RandomUsersResponse> => {
        const endpoint = this.endpoint('api', `?inc=login,name,email,picture,location,cell,dob,phone&results=${ count }`);
        return this.httpClient.get<RandomUsersResponse>(endpoint, this.httpOptions());
    }

}
