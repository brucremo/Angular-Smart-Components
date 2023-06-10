import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsTextareaComponent } from './smart-forms-textarea.component';

describe('SmartFormsTextareaComponent', () => {
  let component: SmartFormsTextareaComponent;
  let fixture: ComponentFixture<SmartFormsTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsTextareaComponent]
    });
    fixture = TestBed.createComponent(SmartFormsTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
