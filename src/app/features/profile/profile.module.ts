import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileEffects } from './store/profile.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfilesListComponent,
        ProfileCardComponent,
    ],
    entryComponents: [ProfileDetailComponent],
    exports: [ProfileDetailComponent],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        HttpClientModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forRoot([ProfileEffects]),
        RouterModule,
    ],
})
export class ProfileModule {}
