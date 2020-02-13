import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private url = 'https://randomuser.me/api/?nat=us';

    constructor(private http: HttpClient) {}

    getRandomProfile(): Observable<any> {
        return this.http.get<any>(`${this.url}`);
    }

    getRandomProfiles(): Observable<any> {
        return this.http.get<any>(`${this.url}?page=1&results=10`);
    }
}
