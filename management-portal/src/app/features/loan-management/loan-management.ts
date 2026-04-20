import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loan-management',
  imports: [],
  templateUrl: './loan-management.html',
  styleUrl: './loan-management.scss',
})
export class LoanManagementComponent {
  activeTab = signal('all');
  tabs = [
    { id: 'all', label: 'All Loans' },
    { id: 'pending', label: 'Pending Approval' },
    { id: 'active', label: 'Active' },
    { id: 'overdue', label: 'Overdue' },
    { id: 'closed', label: 'Closed' },
  ];
}
