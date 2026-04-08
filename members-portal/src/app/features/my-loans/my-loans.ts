import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-my-loans',
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './my-loans.html',
  styleUrl: './my-loans.scss',
})
export class MyLoansComponent {}
