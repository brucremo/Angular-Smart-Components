import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsDatepickerComponent } from './smart-forms-datepicker.component';

describe('SmartFormsDatepickerComponent', () => {
  let component: SmartFormsDatepickerComponent;
  let fixture: ComponentFixture<SmartFormsDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsDatepickerComponent]
    });
    fixture = TestBed.createComponent(SmartFormsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
