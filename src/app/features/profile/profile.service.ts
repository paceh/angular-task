import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private url = 'https://randomuser.me/api';

    constructor(private http: HttpClient) {}

    /**
     * Retrieve a random profile
     */
    getRandomProfile(): Observable<any> {
        return this.http.get<any>(`${this.url}/?nat=us`);
    }

    /**
     * Retrieve multiple random profiles
     * @param seed Identifier for the list of profiles retrieved
     */
    getRandomProfiles(seed: string): Observable<any> {
        return this.http.get<any>(`${this.url}/?nat=us&results=10&seed=${seed}`);
    }
}
