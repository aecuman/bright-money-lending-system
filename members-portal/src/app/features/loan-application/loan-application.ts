import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  imports: [FormsModule],
  templateUrl: './loan-application.html',
  styleUrl: './loan-application.scss',
})
export class LoanApplicationComponent {
  loanAmount = '';
  loanPurpose = '';
  repaymentPeriod = '';
  currentStep = signal(0);

  steps = ['Loan Details', 'Supporting Documents', 'Review & Submit'];

  nextStep() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update(s => s - 1);
    }
  }
}
