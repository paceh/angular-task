import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/layout/page-not-found';
import { HomePageComponent } from '@features/home-page';
import { ProfileDetailComponent } from '@features/profile/profile-detail';
import { ProfileListComponent } from '@features/profile-list/containers/profile-list/profile-list.component';

export const appRoutes: Routes = [
    {
        path: 'profile',
        pathMatch: 'full',
        redirectTo: 'profile/'

    },
    {
        component: ProfileDetailComponent,
        data: { name: 'profileDetail' },
        path: 'profile/:id'
    },
    {
        component: ProfileListComponent,
        data: { name: 'profileList' },

        // Initial idea was profile-list to be standalone lazy loaded module.
        // Then saw how header and page are used.
        // loadChildren: () => import('@features/profile-list/profile-list.module').then((m) => m.ProfileListModule),
        path: 'profile-list'
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
