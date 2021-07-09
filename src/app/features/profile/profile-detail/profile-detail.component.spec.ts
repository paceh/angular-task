import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AppLogoComponent } from '@core/layout/app-logo';
import { HeaderComponent } from '@core/layout/header';
import { PageComponent } from '@core/layout/page';
import { MomentModule } from 'ngx-moment';
import { ProfileDetailComponent } from './profile-detail.component';

describe('ProfileDetailComponent', () => {

    let component: ProfileDetailComponent;
    let fixture: ComponentFixture<ProfileDetailComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                ProfileDetailComponent,
                HeaderComponent,
                PageComponent,
                AppLogoComponent
            ],
            imports: [
                MomentModule,
                MatCardModule,
                MatListModule
            ]
        })
        .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
