import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemBaseComponent } from './nav-item-base.component';

describe('NavItemBaseComponent', () => {
  let component: NavItemBaseComponent;
  let fixture: ComponentFixture<NavItemBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavItemBaseComponent]
    });
    fixture = TestBed.createComponent(NavItemBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
