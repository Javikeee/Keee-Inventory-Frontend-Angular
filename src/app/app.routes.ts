import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/main-layout/main-layout.routes').then(m => m.MAIN_LAYOUT_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
