import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer, getProfileListReducer } from './store/profile.reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';
import { ProfileListComponent } from './profile-list';
import { MatTableModule } from '@angular/material/table';
import { ProfileModuleState } from './interfaces';



export const reducers: ActionReducerMap<ProfileModuleState> = {
    user: getProfileReducer,
    list: getProfileListReducer
};



@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
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
        MatCardModule,
        MatDividerModule,
        MatListModule,
        // StoreModule.forFeature('profile', getProfileReducer),
        // StoreModule.forFeature('profile', getProfileListReducer),
        StoreModule.forFeature('profile', reducers),


        /**
         * registering effects (randomuser api call)
         */
        EffectsModule.forRoot([ProfileEffects]),


        /**
         * add http module
         */
        HttpClientModule,
        MatTableModule
    ]
})
export class ProfileModule { }
