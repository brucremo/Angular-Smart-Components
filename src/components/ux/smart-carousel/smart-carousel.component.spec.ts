import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCarouselComponent } from './smart-carousel.component';

describe('SmartCarouselComponent', () => {
  let component: SmartCarouselComponent;
  let fixture: ComponentFixture<SmartCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmartCarouselComponent]
    });
    fixture = TestBed.createComponent(SmartCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
