import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAboutComponent } from './nav-about.component';

describe('NavAboutComponent', () => {
  let component: NavAboutComponent;
  let fixture: ComponentFixture<NavAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavAboutComponent]
    });
    fixture = TestBed.createComponent(NavAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
