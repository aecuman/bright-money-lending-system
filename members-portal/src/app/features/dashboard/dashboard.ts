import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  loanSummary = {
    activeLoan: 'UGX 5,000,000',
    nextPayment: 'UGX 450,000',
    dueDate: '15 Apr 2026',
    balance: 'UGX 3,600,000',
  };
}
