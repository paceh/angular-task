import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatListModule } from '@angular/material';
import { AppLogoComponent } from '@core/layout/app-logo';
import { HeaderComponent } from '@core/layout/header';
import { PageComponent } from '@core/layout/page';
import { UserComponent } from '../components/user/user.component';
import { Store, StoreModule } from '@ngrx/store';
import { ProfileListComponent } from './profile-list.component';
import { RouterModule } from '@angular/router';
import { AppState } from '@store/reducers';

describe('ProfileListComponent', () => {
    let store: Store<AppState>;
    let component: ProfileListComponent;
    let fixture: ComponentFixture<ProfileListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProfileListComponent,
                HeaderComponent,
                PageComponent,
                AppLogoComponent,
                UserComponent
            ],
            imports: [
                MatCardModule,
                MatListModule,
                StoreModule.forRoot({}),
                RouterModule.forRoot([])
            ]
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit', () => {
        spyOn(store, 'dispatch');
        component.ngOnInit();
        expect(store.dispatch).toHaveBeenCalled();
    });

});
