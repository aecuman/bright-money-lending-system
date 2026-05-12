import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultersPortalComponent } from './defaulters-portal';

describe('DefaultersPortalComponent', () => {
  let component: DefaultersPortalComponent;
  let fixture: ComponentFixture<DefaultersPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultersPortalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultersPortalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render required defaulter information fields', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Defaulters Portal');
    expect(text).toContain("Defaulter's name");
    expect(text).toContain('Amount');
    expect(text).toContain('Security attached to the loan');
  });
});
