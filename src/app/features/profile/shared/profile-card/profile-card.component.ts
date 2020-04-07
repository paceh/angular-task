import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '@features/profile/interfaces';

@Component({
    selector: 'app-profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.less'],
})
export class ProfileCardComponent implements OnInit {
    @Input() user: UserProfile;
    @Input() isLink: boolean;

    constructor() {}

    ngOnInit() {}
}
