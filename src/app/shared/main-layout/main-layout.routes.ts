import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'sales-history',
            loadComponent: () =>
              import('../../features/sales/sales-history/sales-history.component').then(m => m.SalesHistoryComponent)
          },
          {
            path: 'user-management',
            loadComponent: () =>
              import('../../features/user/user-management/user-management.component').then(m => m.UserManagementComponent)
          },
          {
            path: 'product-list',
            loadComponent: () =>
              import('../../features/products/product-list/product-list.component').then(m => m.ProductListComponent)
          },
          {
            path: '',
            redirectTo: 'sales-history',
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];
