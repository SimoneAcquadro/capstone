import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-tech',
  templateUrl: './carousel-tech.component.html',
  styleUrl: './carousel-tech.component.scss'
})
export class CarouselTechComponent {
  carouselItems = [
    { image: '../../../assets/html-css-js.png', title: 'JavaScript' },
    { image: '../../../assets/ng-sass-java.png', title: 'JavaScript' },
  ];
}
