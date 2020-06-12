import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
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
        LayoutModule,
        ProfileListModule,
        ProfileModule
    ]
})
export class FeaturesModule { }
