import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/reducers/profile.reducers';
import { RandomProfilesComponent } from './random-profiles/random-profiles.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '@features/profile/store/effects/profile.effects';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        RandomProfilesComponent
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
        AngularMaterialModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])

    ]
})
export class ProfileModule { }
