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

    getRandomProfiles(seed: string): Observable<any> {
        return this.http.get<any>(`${this.url}/?&seed=${seed}&results=10`);
    }

    getSelectedProfiles(seed: string, selectedIndex: number): Observable<any> {
        const response$ = this.http.get<any>(`${this.url}/?&seed=${seed}&results=10`);
        response$.subscribe(results => {
            console.log('tetasdf', results);
        });
        return response$;
    }
}
