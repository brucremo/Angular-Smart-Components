import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavListItemMenuComponent } from './smart-nav-list-item-menu.component';

describe('SmartNavListItemMenuComponent', () => {
  let component: SmartNavListItemMenuComponent;
  let fixture: ComponentFixture<SmartNavListItemMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartNavListItemMenuComponent]
    });
    fixture = TestBed.createComponent(SmartNavListItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
