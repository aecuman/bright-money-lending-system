import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Admin', icon: 'settings', route: '/system-admin' },
    { label: 'Borrower Management', icon: 'people', route: '/borrowers' },
    { label: 'Staff Management', icon: 'badge', route: '/staff' },
    { label: 'Loan Management', icon: 'account_balance', route: '/loans' },
    { label: 'Field Operations', icon: 'location_on', route: '/field-officers' },
    { label: 'Account', icon: 'calculate', route: '/accounting' },
    { label: 'Defaulters Portal', icon: 'gpp_bad', route: '/defaulters' },
    { label: 'Investors', icon: 'trending_up', route: '/investors' },
    { label: 'Reports', icon: 'bar_chart', route: '/reports' },
  ];
}
