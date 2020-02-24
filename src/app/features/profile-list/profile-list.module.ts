import { ProfileListComponent } from './profile-list.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/profile-list.reducers';
import { ProfileListService } from '../../features/profile-list/profile-list.service';

@NgModule({
    declarations: [
        ProfileListComponent
    ],
    entryComponents: [
        ProfileListComponent
    ],
    exports: [
        ProfileListComponent
    ],
    imports: [
        StoreModule.forFeature('profile-list', reducer)
    ],
    providers: [
        ProfileListService
    ]

})
export class ProfileModule { }
