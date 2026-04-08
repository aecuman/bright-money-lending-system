import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-accounting',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './accounting.html',
  styleUrl: './accounting.scss',
})
export class AccountingComponent {}
