import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsRadioComponent } from './smart-forms-radio.component';

describe('SmartFormsRadioComponent', () => {
  let component: SmartFormsRadioComponent;
  let fixture: ComponentFixture<SmartFormsRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsRadioComponent]
    });
    fixture = TestBed.createComponent(SmartFormsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
