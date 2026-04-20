import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  imports: [FormsModule],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class StaffComponent {
  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    fullName: '',
    gender: '',
    dateOfBirth: '',
    nationalId: '',
    phone: '',
    email: '',
    employeeId: '',
    role: '',
    department: '',
    branch: '',
    supervisorName: '',
    hireDate: '',
    tempPassword: '',
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
      this.form.gender &&
      this.form.nationalId &&
      this.form.phone &&
      this.form.email &&
      this.form.employeeId &&
      this.form.role &&
      this.form.branch &&
      this.form.hireDate
    );
  }

  private resetForm() {
    this.form = {
      fullName: '',
      gender: '',
      dateOfBirth: '',
      nationalId: '',
      phone: '',
      email: '',
      employeeId: '',
      role: '',
      department: '',
      branch: '',
      supervisorName: '',
      hireDate: '',
      tempPassword: '',
    };
  }
}
