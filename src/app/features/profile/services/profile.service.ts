import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(private http: HttpClient) { }

  // NOTE: Used any for development speed.
  getRandom(): Observable<UserProfile> {
    const url = "https://randomuser.me/api";
    return this.http.get<any>(url).pipe(
      map<any, UserProfile>(this.toUserProfile.bind(this)),
    )
  }

  private toUserProfile(response: any): UserProfile {
    return {
      dateOfBirth: response.results[0].dob.date,
      email: response.results[0].email,
      firstName: response.results[0].name.first,
      lastName: response.results[0].name.last,
      phoneNumber: response.results[0].phone,
      cellNumber: response.results[0].cell,
      picture: response.results[0].picture.medium,
      city: response.results[0].location.city,
      state: response.results[0].location.state,
    }
  }
}