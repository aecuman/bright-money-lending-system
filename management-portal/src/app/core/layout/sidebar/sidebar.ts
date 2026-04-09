import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Loan Management', icon: 'account_balance', route: '/loans' },
    { label: 'Borrowers', icon: 'people', route: '/borrowers' },
    { label: 'Staff', icon: 'badge', route: '/staff' },
    { label: 'Accounting', icon: 'calculate', route: '/accounting' },
    { label: 'Field Officers', icon: 'location_on', route: '/field-officers' },
    { label: 'Investors', icon: 'trending_up', route: '/investors' },
    { label: 'Reports', icon: 'bar_chart', route: '/reports' },
    { label: 'System Admin', icon: 'settings', route: '/system-admin' },
  ];
}
