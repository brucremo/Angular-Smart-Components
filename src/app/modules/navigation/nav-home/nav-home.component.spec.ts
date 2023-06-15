import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHomeComponent } from './nav-home.component';

describe('NavHomeComponent', () => {
  let component: NavHomeComponent;
  let fixture: ComponentFixture<NavHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavHomeComponent]
    });
    fixture = TestBed.createComponent(NavHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
