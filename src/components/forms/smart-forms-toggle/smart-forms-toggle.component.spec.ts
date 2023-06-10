import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsToggleComponent } from './smart-forms-toggle.component';

describe('SmartFormsToggleComponent', () => {
  let component: SmartFormsToggleComponent;
  let fixture: ComponentFixture<SmartFormsToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsToggleComponent]
    });
    fixture = TestBed.createComponent(SmartFormsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
