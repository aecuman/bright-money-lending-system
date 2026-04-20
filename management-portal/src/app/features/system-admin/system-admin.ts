import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-system-admin',
  imports: [FormsModule],
  templateUrl: './system-admin.html',
  styleUrl: './system-admin.scss',
})
export class SystemAdminComponent {
  activeTab = signal('users');
  tabs = [
    { id: 'users', label: 'User Accounts' },
    { id: 'roles', label: 'Roles & Permissions' },
    { id: 'audit', label: 'Audit Logs' },
    { id: 'settings', label: 'System Settings' },
  ];

  showModal = signal(false);
  formSubmitted = signal(false);

  form = {
    fullName: '',
    email: '',
    phone: '',
    role: '',
    branch: '',
    isActive: true,
    tempPassword: '',
    forcePasswordChange: true,
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
      this.form.email &&
      this.form.role &&
      this.form.branch
    );
  }

  private resetForm() {
    this.form = {
      fullName: '',
      email: '',
      phone: '',
      role: '',
      branch: '',
      isActive: true,
      tempPassword: '',
      forcePasswordChange: true,
    };
  }
}
