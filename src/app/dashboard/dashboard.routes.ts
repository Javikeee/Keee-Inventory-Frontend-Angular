import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'sales-history',
        loadComponent: () =>
          import('../features/sales/sales-history/sales-history.component').then(m => m.SalesHistoryComponent)
      },
      {
        path: 'user-management',
        loadComponent: () =>
          import('../features/user/user-management/user-management.component').then(m => m.UserManagementComponent)
      }
    ]
  }
];
