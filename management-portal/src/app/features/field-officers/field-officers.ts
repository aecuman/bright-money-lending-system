import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-field-officers',
  imports: [FormsModule],
  templateUrl: './field-officers.html',
  styleUrl: './field-officers.scss',
})
export class FieldOfficersComponent {
  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    fullName: '',
    gender: '',
    nationalId: '',
    phone: '',
    email: '',
    branch: '',
    supervisor: '',
    assignedZone: '',
    territory: '',
    deviceType: '',
    deviceSerial: '',
    hireDate: '',
  };

  openModal() {
    this.showModal.set(true);
    this.formSubmitted.set(false);
    this.resetForm();
  }

  closeModal() {
    this.showModal.set(false);
  }

  submitForm() {
    this.formSubmitted.set(true);
    if (!this.isFormValid()) return;
    this.closeModal();
  }

  isFormValid(): boolean {
    return !!(
      this.form.fullName &&
      this.form.nationalId &&
      this.form.phone &&
      this.form.branch &&
      this.form.assignedZone
    );
  }

  private resetForm() {
    this.form = {
      fullName: '',
      gender: '',
      nationalId: '',
      phone: '',
      email: '',
      branch: '',
      supervisor: '',
      assignedZone: '',
      territory: '',
      deviceType: '',
      deviceSerial: '',
      hireDate: '',
    };
  }
}
