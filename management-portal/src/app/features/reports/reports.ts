import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reports',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class ReportsComponent {}
