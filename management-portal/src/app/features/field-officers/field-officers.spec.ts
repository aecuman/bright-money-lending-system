import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldOfficers } from './field-officers';

describe('FieldOfficers', () => {
  let component: FieldOfficers;
  let fixture: ComponentFixture<FieldOfficers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldOfficers],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldOfficers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
