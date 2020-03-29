import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private baseUrl = 'https://randomuser.me/api';
    public selectedRowData = new BehaviorSubject(null);

    constructor (private http: HttpClient) {
    }

    public getProfile (): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/?nat=us`);
    }

    public getProfiles (count: number): Observable<any> {
        return this.http.get<{[k: string]: any}>(`${this.baseUrl}/?nat=us&results=${count}`);
    }

    public getSelectedRowData (data: {[k: string]: any}) {
        this.selectedRowData.next(data);
    }
}
