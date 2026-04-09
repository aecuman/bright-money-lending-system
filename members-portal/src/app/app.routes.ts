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
        path: 'my-loans',
        loadComponent: () =>
          import('./features/my-loans/my-loans').then((m) => m.MyLoansComponent),
      },
      {
        path: 'apply',
        loadComponent: () =>
          import('./features/loan-application/loan-application').then(
            (m) => m.LoanApplicationComponent
          ),
      },
      {
        path: 'repayment-schedule',
        loadComponent: () =>
          import('./features/repayment-schedule/repayment-schedule').then(
            (m) => m.RepaymentScheduleComponent
          ),
      },
      {
        path: 'statements',
        loadComponent: () =>
          import('./features/statements/statements').then((m) => m.StatementsComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile').then((m) => m.ProfileComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
