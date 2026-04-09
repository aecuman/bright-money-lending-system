import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-borrowers',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './borrowers.html',
  styleUrl: './borrowers.scss',
})
export class BorrowersComponent {}
