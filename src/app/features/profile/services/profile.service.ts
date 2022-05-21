import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, shareReplay } from "rxjs/operators";
import { RawUserProfile, UserProfile } from "../interfaces";

const RANDOM_USER_GENERATOR_URL = `https://randomuser.me/api/`;

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    constructor(
        private readonly http: HttpClient
    ) {}

    /**
     * get a random user's profile data from randomuser api
     */
    getRandomUser(): Observable<UserProfile> {
        return this.http.get<UserProfile>(RANDOM_USER_GENERATOR_URL)
            .pipe(
                shareReplay({
                    bufferSize: 1,
                    refCount: false
                }),
                map(({ results }: any) => results.shift()),
                map((rawUser) => this.formatRandomUserData(rawUser)),
                catchError((error: any) => throwError(error.json()))
            )
    }

    /**
     * helper function for reformatting payload from random user api
     */
    formatRandomUserData(rawUser: RawUserProfile): UserProfile {
        return {
            cellNumber: rawUser.cell,
            city: rawUser.location.city,
            dateOfBirth: rawUser.dob.date,
            email: rawUser.email,
            firstName: rawUser.name.first,
            lastName: rawUser.name.last,
            phoneNumber: rawUser.cell,
            picture: rawUser.picture.large,
            state: rawUser.location.state,
        }
    }
}