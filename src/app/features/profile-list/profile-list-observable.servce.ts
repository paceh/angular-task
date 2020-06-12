import { UserProfile } from '@features/profile/interfaces/user-profile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProfileListObservableService {
    private profileList: UserProfile[];
    private profileListSubject = new BehaviorSubject<UserProfile[]>(this.profileList);
    public profileList$ = this.profileListSubject.asObservable();

    set(profileList: UserProfile[]) {

        this.profileListSubject.next(profileList);

    }

}
