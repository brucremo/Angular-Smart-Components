import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemMenuComponent } from './nav-item-menu.component';

describe('NavItemMenuComponent', () => {
  let component: NavItemMenuComponent;
  let fixture: ComponentFixture<NavItemMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavItemMenuComponent]
    });
    fixture = TestBed.createComponent(NavItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
