import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home2Component } from './home2.component';
import { LoginComponent, SignUpComponent } from '@ngl/login';
import { AuthenticatedComponent } from './authenticated.component';
import { UnauthenticatedComponent } from './unauthenticated.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: UnauthenticatedComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'signup',
        pathMatch: 'full',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: 'dashboard',
        component: Home2Component,
      },
      {
        path: 'content',
        component: HomeComponent,
      },
      {
        path: 'components',
        component: Home2Component,
      },
      {
        path: 'comments',
        component: HomeComponent,
      },
    ],
  },
];
