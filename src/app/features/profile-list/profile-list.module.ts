import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { ProfileListComponent } from './profile-list.component';
import { StoreModule } from '@ngrx/store';
import { profileListReducer } from './store/reducers/profile-list.reducer';
import { LayoutModule } from '@core/layout/layout.module';

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
        CommonModule,
        LayoutModule,
        MatTableModule,
        StoreModule.forFeature('profiles', profileListReducer)
    ]
})
export class ProfileListModule { }
