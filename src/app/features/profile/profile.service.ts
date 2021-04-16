import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProfileService {
    private apiURL = 'https://randomuser.me/api/';

    constructor(private http: HttpClient) {
    }

    getRandomProfile(): Observable<any> {
        return this.http.get(this.apiURL)
    }
}
