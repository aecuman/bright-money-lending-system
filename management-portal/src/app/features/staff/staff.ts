import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-staff',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class StaffComponent {}
