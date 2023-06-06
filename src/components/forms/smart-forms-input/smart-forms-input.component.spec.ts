import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsInputComponent } from './smart-forms-input.component';

describe('SmartFormsInputComponent', () => {
  let component: SmartFormsInputComponent;
  let fixture: ComponentFixture<SmartFormsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsInputComponent]
    });
    fixture = TestBed.createComponent(SmartFormsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
