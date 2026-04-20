import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

interface JournalLine {
  account: string;
  description: string;
  debit: string;
  credit: string;
}

@Component({
  selector: 'app-accounting',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './accounting.html',
  styleUrl: './accounting.scss',
})
export class AccountingComponent {
  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    entryDate: '',
    referenceNumber: '',
    description: '',
    lines: [
      { account: '', description: '', debit: '', credit: '' },
      { account: '', description: '', debit: '', credit: '' },
    ] as JournalLine[],
  };

  openModal() {
    this.showModal.set(true);
    this.formSubmitted.set(false);
    this.resetForm();
  }

  closeModal() {
    this.showModal.set(false);
  }

  addLine() {
    this.form.lines.push({ account: '', description: '', debit: '', credit: '' });
  }

  removeLine(index: number) {
    if (this.form.lines.length > 2) {
      this.form.lines.splice(index, 1);
    }
  }

  get totalDebits(): number {
    return this.form.lines.reduce((sum, l) => sum + (parseFloat(l.debit) || 0), 0);
  }

  get totalCredits(): number {
    return this.form.lines.reduce((sum, l) => sum + (parseFloat(l.credit) || 0), 0);
  }

  get isBalanced(): boolean {
    return (
      this.totalDebits > 0 &&
      Math.abs(this.totalDebits - this.totalCredits) < 0.01
    );
  }

  submitForm() {
    this.formSubmitted.set(true);
    if (!this.isFormValid()) return;
    this.closeModal();
  }

  isFormValid(): boolean {
    return !!(
      this.form.entryDate &&
      this.form.referenceNumber &&
      this.form.description &&
      this.isBalanced
    );
  }

  private resetForm() {
    this.form = {
      entryDate: '',
      referenceNumber: '',
      description: '',
      lines: [
        { account: '', description: '', debit: '', credit: '' },
        { account: '', description: '', debit: '', credit: '' },
      ],
    };
  }
}
