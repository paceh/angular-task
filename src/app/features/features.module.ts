import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { ProfileListModule } from './profile-list/profile-list.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    entryComponents: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        ProfileModule,
        ProfileListModule
    ]
})
export class FeaturesModule { }
