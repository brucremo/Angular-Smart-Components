import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavbarBaseComponent } from './smart-navbar-base.component';

describe('SmartNavbarBaseComponent', () => {
  let component: SmartNavbarBaseComponent;
  let fixture: ComponentFixture<SmartNavbarBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartNavbarBaseComponent]
    });
    fixture = TestBed.createComponent(SmartNavbarBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
