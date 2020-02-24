import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@features/features.module';
import { AppComponent } from './app.component';
import { ProfileEffects } from './features/profile/store/profile.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FeaturesModule,
        EffectsModule.forRoot([ProfileEffects])
    ]
})
export class AppModule { }
