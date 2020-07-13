import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private http: HttpClient) { }

    getUsers(numUsers: number) {
        return this.http.get(`${environment.apiUrl}api/?results=${numUsers}`);
    }
}