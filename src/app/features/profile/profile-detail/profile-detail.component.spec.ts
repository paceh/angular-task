import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ProfileDetailComponent } from './profile-detail.component';

describe('ProfileDetailComponent', () => {

    let component: ProfileDetailComponent;
    let fixture: ComponentFixture<ProfileDetailComponent>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [
                ProfileDetailComponent
            ],
            imports: [
                MatCardModule
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
