import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavbarSidemenuComponent } from './smart-navbar-sidemenu.component';

describe('SmartNavbarSidemenuComponent', () => {
  let component: SmartNavbarSidemenuComponent;
  let fixture: ComponentFixture<SmartNavbarSidemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartNavbarSidemenuComponent]
    });
    fixture = TestBed.createComponent(SmartNavbarSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
