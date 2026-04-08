import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface StatCard {
  label: string;
  value: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  stats: StatCard[] = [
    { label: 'Active Loans', value: '1,248', icon: 'account_balance', color: '#3f8ef8' },
    { label: 'Total Borrowers', value: '3,560', icon: 'people', color: '#4caf50' },
    { label: 'Disbursed (Month)', value: 'UGX 420M', icon: 'payments', color: '#ff9800' },
    { label: 'Repayments (Today)', value: 'UGX 12.4M', icon: 'price_check', color: '#9c27b0' },
    { label: 'Overdue Loans', value: '87', icon: 'warning', color: '#f44336' },
    { label: 'Pending Approvals', value: '34', icon: 'pending_actions', color: '#00bcd4' },
  ];
}
