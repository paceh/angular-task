import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProfileListService {

    constructor (private http: HttpClient) {}

    getAll () {

        return this.http.get('https://randomuser.me/api/?results=10');

    }

}
