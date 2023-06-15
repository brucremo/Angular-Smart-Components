import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavbarExpandableComponent } from './smart-navbar-expandable.component';

describe('SmartNavbarExpandableComponent', () => {
  let component: SmartNavbarExpandableComponent;
  let fixture: ComponentFixture<SmartNavbarExpandableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartNavbarExpandableComponent]
    });
    fixture = TestBed.createComponent(SmartNavbarExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
