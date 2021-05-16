import { LayoutModule as AngularLayoutModule } from '@angular/cdk/layout';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule, NgModuleFactoryLoader, Optional, SkipSelf, SystemJsNgModuleLoader } from '@angular/core';
import { AppStoreModule } from '@store/store.module';
import { LayoutModule } from './layout/layout.module';
import { moduleImportGuard } from './module-import-guard';
import { RoutingModule } from './routing/routing.module';
import { UserProfileService } from './services/user-profile.service';
import { DataTransformService } from './services/data-transform.service';

@NgModule({
    declarations: [],
    exports: [
        RoutingModule
    ],
    imports: [
        AngularLayoutModule,
        AppStoreModule,
        CommonModule,
        HttpClientJsonpModule,
        HttpClientModule,
        LayoutModule,
        RoutingModule
    ],
    providers: [
        UserProfileService,
        DataTransformService,
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        { provide: 'Window', useValue: window }
    ]
})
export class CoreModule {

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

        moduleImportGuard(parentModule, 'CoreModule');

    }

}
