import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-foto',
  templateUrl: './carousel-foto.component.html',
  styleUrl: './carousel-foto.component.scss'
})
export class CarouselFotoComponent {
  carouselItems = [
    { image: '../../../assets/jpg/IMG_0371.jpg', title: 'foto 1' },
    { image: '../../../assets/jpg/IMG_2044 (1).jpg', title: 'foto 2' },
    { image: '../../../assets/jpg/IMG_3667.jpg', title: 'foto 3' },
    { image: '../../../assets/jpg/IMG_0527.jpg', title: 'foto 4' },
    { image: '../../../assets/jpg/IMG_3568-2.jpg', title: 'foto 5' },
    { image: '../../../assets/jpg/IMG_4333.jpg', title: 'foto 6' },
    { image: '../../../assets/jpg/IMG_3603.jpg', title: 'foto 7' },
    { image: '../../../assets/jpg/IMG_7822.jpg', title: 'foto 8' },
    { image: '../../../assets/jpg/IMG_7909.jpg', title: 'foto 9' },
    { image: '../../../assets/jpg/IMG_6537.jpg', title: 'foto 10' },
    { image: '../../../assets/jpg/IMG_8898.jpg', title: 'foto 11' },
    { image: '../../../assets/jpg/IMG_2877.jpg', title: 'foto 12' },
    { image: '../../../assets/jpg/IMG_3586.jpg', title: 'foto 13' },
    { image: '../../../assets/jpg/IMG_4344.jpg', title: 'foto 14' },
    { image: '../../../assets/jpg/IMG_2378-Modifica.jpg', title: 'foto 15' },
  ];

  slides: any[] = [];
  selectedImage: string | null = null;

  constructor(private modalService: NgbModal) {
    this.slides = this.chunkArray(this.carouselItems, 3);
  }

  chunkArray(array: any[], size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  open(content: any, image: string) {
    this.selectedImage = image;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      () => {
        this.selectedImage = null;
      },
      () => {
        this.selectedImage = null;
      }
    );
  }
}

