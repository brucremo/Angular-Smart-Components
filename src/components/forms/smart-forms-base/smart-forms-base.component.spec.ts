import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsBaseComponent } from './smart-forms-base.component';

describe('SmartFormsBaseComponent', () => {
  let component: SmartFormsBaseComponent;
  let fixture: ComponentFixture<SmartFormsBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsBaseComponent]
    });
    fixture = TestBed.createComponent(SmartFormsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
