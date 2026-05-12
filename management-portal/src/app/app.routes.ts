import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell';
import { LoginComponent } from './auth/login/login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'loans',
        loadComponent: () =>
          import('./features/loan-management/loan-management').then(
            (m) => m.LoanManagementComponent
          ),
      },
      {
        path: 'borrowers',
        loadComponent: () =>
          import('./features/borrowers/borrowers').then((m) => m.BorrowersComponent),
      },
      {
        path: 'staff',
        loadComponent: () =>
          import('./features/staff/staff').then((m) => m.StaffComponent),
      },
      {
        path: 'accounting',
        loadComponent: () =>
          import('./features/accounting/accounting').then((m) => m.AccountingComponent),
      },
      {
        path: 'field-officers',
        loadComponent: () =>
          import('./features/field-officers/field-officers').then(
            (m) => m.FieldOfficersComponent
          ),
      },
      {
        path: 'investors',
        loadComponent: () =>
          import('./features/investors/investors').then((m) => m.InvestorsComponent),
      },
      {
        path: 'defaulters',
        loadComponent: () =>
          import('./features/defaulters-portal/defaulters-portal').then(
            (m) => m.DefaultersPortalComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports').then((m) => m.ReportsComponent),
      },
      {
        path: 'system-admin',
        loadComponent: () =>
          import('./features/system-admin/system-admin').then((m) => m.SystemAdminComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
