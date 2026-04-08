import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-field-officers',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './field-officers.html',
  styleUrl: './field-officers.scss',
})
export class FieldOfficersComponent {}
