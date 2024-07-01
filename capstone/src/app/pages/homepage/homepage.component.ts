import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',

})
export class HomepageComponent {
  carouselItems = [
    { image: 'https://via.placeholder.com/800x400?text=Slide+1', title: 'Slide 1' },
    { image: 'https://via.placeholder.com/800x400?text=Slide+2', title: 'Slide 2' },
    { image: 'https://via.placeholder.com/800x400?text=Slide+3', title: 'Slide 3' }
  ];

}

