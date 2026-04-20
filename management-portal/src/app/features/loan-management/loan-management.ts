import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-management',
  imports: [FormsModule],
  templateUrl: './loan-management.html',
  styleUrl: './loan-management.scss',
})
export class LoanManagementComponent {
  activeTab = signal('all');
  tabs = [
    { id: 'all', label: 'All Loans' },
    { id: 'pending', label: 'Pending Approval' },
    { id: 'active', label: 'Active' },
    { id: 'overdue', label: 'Overdue' },
    { id: 'closed', label: 'Closed' },
  ];

  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    borrowerSearch: '',
    loanProduct: '',
    loanAmount: '',
    tenureMonths: '',
    interestRate: '',
    purpose: '',
    hasCollateral: false,
    collateralType: '',
    collateralValue: '',
    disbursementMethod: '',
    accountNumber: '',
    notes: '',
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
      this.form.borrowerSearch &&
      this.form.loanProduct &&
      this.form.loanAmount &&
      this.form.tenureMonths &&
      this.form.purpose &&
      this.form.disbursementMethod
    );
  }

  private resetForm() {
    this.form = {
      borrowerSearch: '',
      loanProduct: '',
      loanAmount: '',
      tenureMonths: '',
      interestRate: '',
      purpose: '',
      hasCollateral: false,
      collateralType: '',
      collateralValue: '',
      disbursementMethod: '',
      accountNumber: '',
      notes: '',
    };
  }
}
