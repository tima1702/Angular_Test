import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {LangingComponent} from './langing/langing.component';
import {AboutGuard} from './about.guard';

const routes: Routes = [{
  path: 'landing',
  canActivate: [AboutGuard],
  component: LangingComponent,
},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/login'}];

export const appRoutes: any = RouterModule.forRoot(routes);
