import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-loan-management',
  imports: [MatCardModule, MatTabsModule, MatIconModule, MatButtonModule],
  templateUrl: './loan-management.html',
  styleUrl: './loan-management.scss',
})
export class LoanManagementComponent {}
