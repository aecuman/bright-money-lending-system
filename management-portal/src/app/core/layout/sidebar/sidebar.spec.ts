import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include all required home-tab modules in navigation', () => {
    expect(component.navItems.map((item) => item.label)).toEqual([
      'Dashboard',
      'Admin',
      'Borrower Management',
      'Staff Management',
      'Loan Management',
      'Field Operations',
      'Account',
      'Defaulters Portal',
      'Investors',
      'Reports',
    ]);
  });
});
