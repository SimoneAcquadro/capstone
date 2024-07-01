import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  carouselItems = [
    { image: '../../../assets/html-css-js.png', title: 'JavaScript' },
    { image: '../../../assets/html-css-js.png', title: 'JavaScript' },
    { image: '../../../assets/html-css-js.png', title: 'JavaScript' },
    
  ];
}
