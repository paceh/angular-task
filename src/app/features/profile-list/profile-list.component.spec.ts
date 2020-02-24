import { ProfileListComponent } from './profile-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ProfileListComponent', () => {

    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                ProfileListComponent
            ],
        })
        .compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        fixture = TestBed.createComponent(ProfileListComponent)
        component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });
    it('should load data', () => {
        fixture = TestBed.createComponent(ProfileListComponent)
        component = fixture.componentInstance;
        expect("#LoadUserList").not.toBeNull();
    });
    it('should load data', () => {
        fixture = TestBed.createComponent(ProfileListComponent)
        component = fixture.componentInstance;
        expect("#LoadUsersById").not.toBeNull();
    });

});
