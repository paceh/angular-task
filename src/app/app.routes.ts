import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { RandomProfilesComponent } from '@features/profile/random-profiles/random-profiles.component';

export const appRoutes: Routes = [
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile'
    },
    {
        component: RandomProfilesComponent,
        data: { name: 'profiles' },
        path: 'profiles'
    },
    {
        component: PageNotFoundComponent,
        data: { name: 'pageNotFound' },
        path: '404'
    },
    {
        component: HomePageComponent,
        data: { name: 'homePage' },
        path: ''
    },
    {
        data: { name: 'pageNotFound' },
        path: '**',
        redirectTo: '/404'
    }
];
