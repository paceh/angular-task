import { MaterialModule } from '@features/profile-list/material-module';
import { ProfileListService } from './store/profile-list.service';
import { ProfileListObservableService } from './profile-list-observable.servce';
import { LayoutModule } from './../../core/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponents from './components';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profieListFeatureReducer, FEATURE_NAME_PROFILE_LIST } from './profile-list.state';
import { ProfileListffects } from './store/profile-list.effects';


@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  entryComponents: [
    ...fromContainers.containers
  ],
  imports: [
    LayoutModule,
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME_PROFILE_LIST, profieListFeatureReducer),
    EffectsModule.forFeature([ProfileListffects]),
    MaterialModule
  ],
  // tslint:disable-next-line: object-literal-sort-keys
  exports: [
    ...fromContainers.containers,
    ...fromComponents.components],
  providers: [
    ProfileListObservableService,
    ProfileListService]
})
export class ProfileListModule { }
