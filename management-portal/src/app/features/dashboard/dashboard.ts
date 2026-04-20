import { Component } from '@angular/core';

interface StatCard {
  label: string;
  value: string;
  icon: string;
  color: string;
  bg: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  stats: StatCard[] = [
    { label: 'Active Loans', value: '1,248', icon: 'account_balance', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Borrowers', value: '3,560', icon: 'people', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Disbursed (Month)', value: 'UGX 420M', icon: 'payments', color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Repayments (Today)', value: 'UGX 12.4M', icon: 'price_check', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Overdue Loans', value: '87', icon: 'warning', color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Pending Approvals', value: '34', icon: 'pending_actions', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];
}
