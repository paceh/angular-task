import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';

import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UserComponent } from './components/user/user.component';
import { ProfileEffects } from './store/profile.effects';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent,
        UserComponent
    ],
    entryComponents: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    exports: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        FlexLayoutModule,
        MomentModule,
        MatSnackBarModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ ProfileEffects ]),
    ]
})
export class ProfileModule { }
