import { Component, Input } from "@angular/core";
import { UserProfile } from "../interfaces";

@Component({
    selector: 'crx-profile-card',
    styleUrls: ['./profile-card.component.less'],
    templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent {
    @Input() user: UserProfile;
    @Input() loading: boolean;
}
