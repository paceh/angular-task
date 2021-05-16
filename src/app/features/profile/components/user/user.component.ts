import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { UserProfile } from '@features/profile/interfaces';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

    @Input() userProfile: UserProfile;
    @Output() userClick: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

}
