import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home2Component } from './home2.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
{
    path: 'dashboard',
    pathMatch: 'full',
    component: Home2Component,
  },
{
    path: 'content',
    pathMatch: 'full',
    component: HomeComponent,
  },
{
    path: 'components',
    pathMatch: 'full',
    component: Home2Component,
  },
{
    path: 'comments',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
