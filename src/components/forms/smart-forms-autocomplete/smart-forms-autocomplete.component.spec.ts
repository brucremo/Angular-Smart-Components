import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormsAutocompleteComponent } from './smart-forms-autocomplete.component';

describe('SmartFormsAutocompleteComponent', () => {
  let component: SmartFormsAutocompleteComponent;
  let fixture: ComponentFixture<SmartFormsAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartFormsAutocompleteComponent]
    });
    fixture = TestBed.createComponent(SmartFormsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
