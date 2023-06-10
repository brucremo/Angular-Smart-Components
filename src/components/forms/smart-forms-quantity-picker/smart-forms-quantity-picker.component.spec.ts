import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsQuantityPickerComponent } from './smart-forms-quantity-picker.component';

describe('SmartFormsQuantityPickerComponent', () => {
  let component: SmartFormsQuantityPickerComponent;
  let fixture: ComponentFixture<SmartFormsQuantityPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsQuantityPickerComponent]
    });
    fixture = TestBed.createComponent(SmartFormsQuantityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
