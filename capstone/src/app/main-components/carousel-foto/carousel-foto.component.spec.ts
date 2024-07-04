import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFotoComponent } from './carousel-foto.component';

describe('CarouselFotoComponent', () => {
  let component: CarouselFotoComponent;
  let fixture: ComponentFixture<CarouselFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
