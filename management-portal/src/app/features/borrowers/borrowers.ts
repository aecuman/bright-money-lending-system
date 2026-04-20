import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-borrowers',
  imports: [FormsModule],
  templateUrl: './borrowers.html',
  styleUrl: './borrowers.scss',
})
export class BorrowersComponent {
  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationalId: '',
    phone: '',
    email: '',
    physicalAddress: '',
    district: '',
    employmentStatus: '',
    employerName: '',
    monthlyIncome: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
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
    // Submission logic will be wired to a service
    this.closeModal();
  }

  isFormValid(): boolean {
    return !!(
      this.form.fullName &&
      this.form.dateOfBirth &&
      this.form.gender &&
      this.form.nationalId &&
      this.form.phone &&
      this.form.physicalAddress &&
      this.form.district
    );
  }

  private resetForm() {
    this.form = {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      nationalId: '',
      phone: '',
      email: '',
      physicalAddress: '',
      district: '',
      employmentStatus: '',
      employerName: '',
      monthlyIncome: '',
      emergencyName: '',
      emergencyPhone: '',
      emergencyRelationship: '',
    };
  }
}
