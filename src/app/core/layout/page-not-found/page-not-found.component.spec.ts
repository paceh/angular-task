import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {

    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [
                PageNotFoundComponent
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

            fixture = TestBed.createComponent(PageNotFoundComponent);
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
