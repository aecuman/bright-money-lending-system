import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investors',
  imports: [FormsModule],
  templateUrl: './investors.html',
  styleUrl: './investors.scss',
})
export class InvestorsComponent {
  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    investorType: 'individual',
    fullName: '',
    companyName: '',
    registrationNumber: '',
    phone: '',
    email: '',
    nationalId: '',
    investmentAmount: '',
    investmentPeriodMonths: '',
    expectedReturnRate: '',
    riskProfile: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
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
    const nameValid =
      this.form.investorType === 'individual' ? !!this.form.fullName : !!this.form.companyName;
    return !!(
      nameValid &&
      this.form.phone &&
      this.form.email &&
      this.form.investmentAmount &&
      this.form.investmentPeriodMonths &&
      this.form.bankName &&
      this.form.accountNumber
    );
  }

  private resetForm() {
    this.form = {
      investorType: 'individual',
      fullName: '',
      companyName: '',
      registrationNumber: '',
      phone: '',
      email: '',
      nationalId: '',
      investmentAmount: '',
      investmentPeriodMonths: '',
      expectedReturnRate: '',
      riskProfile: '',
      bankName: '',
      accountNumber: '',
      accountName: '',
      notes: '',
    };
  }
}
