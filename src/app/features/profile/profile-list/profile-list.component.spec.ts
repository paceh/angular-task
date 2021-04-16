import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ProfileListComponent } from './profile-list.component';

describe('ProfileListComponent', () => {

    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                ProfileListComponent
            ],
            imports: [
                MatCardModule
            ]
        })
        .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ProfileListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
