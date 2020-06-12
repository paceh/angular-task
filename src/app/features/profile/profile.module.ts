import { MaterialModule } from '@features/profile/material-module';
import { ProfileEffects } from './store/profile.effects';
import { ProfileService } from '@features/profile/store/profile.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ProfileDetailComponent
    ],
    entryComponents: [
        ProfileDetailComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects]),
        RouterModule,
        MaterialModule
    ],
    providers: [ProfileService]
})
export class ProfileModule { }
