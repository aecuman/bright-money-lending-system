import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink],
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
