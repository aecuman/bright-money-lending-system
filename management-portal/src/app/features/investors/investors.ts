import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-investors',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './investors.html',
  styleUrl: './investors.scss',
})
export class InvestorsComponent {}
