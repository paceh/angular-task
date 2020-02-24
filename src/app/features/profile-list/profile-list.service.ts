import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileListService {
    constructor (private _httpClient : HttpClient){}
getProfileById(userId: Number) {
    return this._httpClient.get(`url/${userId}.json`);
 }
}