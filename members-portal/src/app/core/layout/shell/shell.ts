import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, TopbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class ShellComponent {
  navItems: NavItem[] = [
    { label: 'Overview', icon: 'home', route: '/dashboard' },
    { label: 'My Loans', icon: 'account_balance', route: '/my-loans' },
    { label: 'Apply for Loan', icon: 'add_circle', route: '/apply' },
    { label: 'Repayment Schedule', icon: 'calendar_month', route: '/repayment-schedule' },
    { label: 'Statements', icon: 'receipt_long', route: '/statements' },
    { label: 'My Profile', icon: 'manage_accounts', route: '/profile' },
  ];
}
