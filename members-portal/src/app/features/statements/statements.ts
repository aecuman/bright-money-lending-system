import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-statements',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './statements.html',
  styleUrl: './statements.scss',
})
export class StatementsComponent {}
