import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        .overrideComponent(HeaderComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default } // this need for testing component with OnPush
        })
        .compileComponents()
        .then(() => {

            fixture = TestBed.createComponent(HeaderComponent);
            component = fixture.componentInstance;

        });

    }));

    afterEach(() => {

        fixture.destroy();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
