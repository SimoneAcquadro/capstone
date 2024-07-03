import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-tech',
  templateUrl: './carousel-tech.component.html',
  styleUrl: './carousel-tech.component.scss'
})
export class CarouselTechComponent {
  carouselItems = [
    { image: '../../../assets/ps-lr-pr.png', title: 'JavaScript' },
    { image: '../../../assets/dav-pr-fig.png', title: 'JavaScript' },
  ];
}
