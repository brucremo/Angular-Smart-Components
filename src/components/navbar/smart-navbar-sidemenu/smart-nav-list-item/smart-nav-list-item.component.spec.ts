import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavListItemComponent } from './smart-nav-list-item.component';

describe('SmartNavListItemComponent', () => {
  let component: SmartNavListItemComponent;
  let fixture: ComponentFixture<SmartNavListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartNavListItemComponent]
    });
    fixture = TestBed.createComponent(SmartNavListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
