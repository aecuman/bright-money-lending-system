import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

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
  imports: [MatCardModule, MatIconModule, MatTableModule],
  templateUrl: './repayment-schedule.html',
  styleUrl: './repayment-schedule.scss',
})
export class RepaymentScheduleComponent {
  displayedColumns = ['installment', 'dueDate', 'principal', 'interest', 'total', 'status'];
  schedule: ScheduleRow[] = [
    { installment: 1, dueDate: '15 Jan 2026', principal: '350,000', interest: '100,000', total: '450,000', status: 'Paid' },
    { installment: 2, dueDate: '15 Feb 2026', principal: '358,750', interest: '91,250', total: '450,000', status: 'Paid' },
    { installment: 3, dueDate: '15 Mar 2026', principal: '367,719', interest: '82,281', total: '450,000', status: 'Paid' },
    { installment: 4, dueDate: '15 Apr 2026', principal: '376,911', interest: '73,089', total: '450,000', status: 'Due' },
    { installment: 5, dueDate: '15 May 2026', principal: '386,334', interest: '63,666', total: '450,000', status: 'Upcoming' },
    { installment: 6, dueDate: '15 Jun 2026', principal: '395,992', interest: '54,008', total: '450,000', status: 'Upcoming' },
  ];
}
