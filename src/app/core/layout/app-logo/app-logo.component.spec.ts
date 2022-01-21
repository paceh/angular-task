import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLogoComponent } from './app-logo.component';

describe('AppLogoComponent', () => {

    let component: AppLogoComponent;
    let fixture: ComponentFixture<AppLogoComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [
                AppLogoComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        .overrideComponent(AppLogoComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default } // this need for testing component with OnPush
        })
        .compileComponents()
        .then(() => {

            fixture = TestBed.createComponent(AppLogoComponent);
            component = fixture.componentInstance;

        });

    }));

    afterEach(() => {

        fixture.destroy();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

    it('should change behavior on props set', () => {

        component.newTab = true;
        component.white = true;

        component.ngOnInit();
        fixture.detectChanges();

        const logo = fixture.debugElement.query(By.css('.logo'));
        const img = fixture.debugElement.query(By.css('img'));

        expect(logo.nativeElement.getAttribute('target')).toEqual('_blank');
        expect(img.nativeElement.getAttribute('src')).toEqual('/content/img/CREXi-logo-white.svg');

    });

});
