import { Component } from '@angular/core';

export interface ScheduleRow {
  installment: number;
  dueDate: string;
  principal: string;
  interest: string;
  total: string;
  status: string;
}

@Component({
  selector: 'app-repayment-schedule',
  imports: [],
  templateUrl: './repayment-schedule.html',
  styleUrl: './repayment-schedule.scss',
})
export class RepaymentScheduleComponent {
  schedule: ScheduleRow[] = [
    { installment: 1, dueDate: '15 Jan 2026', principal: '350,000', interest: '100,000', total: '450,000', status: 'Paid' },
    { installment: 2, dueDate: '15 Feb 2026', principal: '358,750', interest: '91,250', total: '450,000', status: 'Paid' },
    { installment: 3, dueDate: '15 Mar 2026', principal: '367,719', interest: '82,281', total: '450,000', status: 'Paid' },
    { installment: 4, dueDate: '15 Apr 2026', principal: '376,911', interest: '73,089', total: '450,000', status: 'Due' },
    { installment: 5, dueDate: '15 May 2026', principal: '386,334', interest: '63,666', total: '450,000', status: 'Upcoming' },
    { installment: 6, dueDate: '15 Jun 2026', principal: '395,992', interest: '54,008', total: '450,000', status: 'Upcoming' },
  ];

  statusClass(status: string): string {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700';
      case 'Due': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-500';
    }
  }
}
