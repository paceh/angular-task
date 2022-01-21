import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {

    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [
                FooterComponent
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        .compileComponents()
        .then(() => {

            fixture = TestBed.createComponent(FooterComponent);
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
