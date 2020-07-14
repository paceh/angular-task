import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ProfileListService {

    constructor(private httpClient: HttpClient) { }

    getRandomUsers(pageSize = 1): Observable<{ results: any, info: any }> {

        return this.httpClient.get<any>(`https://randomuser.me/api/?results=${pageSize}`)
            .pipe(catchError((error: any) => throwError(error.json())));

    }

}
