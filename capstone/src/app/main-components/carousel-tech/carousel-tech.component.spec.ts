import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTechComponent } from './carousel-tech.component';

describe('CarouselTechComponent', () => {
  let component: CarouselTechComponent;
  let fixture: ComponentFixture<CarouselTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
