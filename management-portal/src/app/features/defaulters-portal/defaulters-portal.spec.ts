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
});
