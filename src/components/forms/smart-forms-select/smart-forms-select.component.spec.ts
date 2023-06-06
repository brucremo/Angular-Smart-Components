import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsSelectComponent } from './smart-forms-select.component';

describe('SmartFormsSelectComponent', () => {
  let component: SmartFormsSelectComponent;
  let fixture: ComponentFixture<SmartFormsSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsSelectComponent]
    });
    fixture = TestBed.createComponent(SmartFormsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
