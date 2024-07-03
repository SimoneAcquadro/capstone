import { Component } from '@angular/core';

@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrl: './web-component.component.scss'
})
export class WebComponentComponent {
  card1 = [
    {
      titolo: `Sviluppo Front-End`,
      testo: `Ho deciso di specializzarmi nel <strong>Front-End</strong> fin dall'inizio del mio
        percorso nello <strong>sviluppo Web</strong>.
        La possibilità di trasformare <strong>idee creative</strong> in <strong>applicazioni pratiche</strong> mi ha convinto a iniziare questo
        percorso.`,
      foto: `../../../assets/angularJs.png`
    }
  ];


  card2 = [
    {
      titolo: `UX / UI Design`,
      testo: `Nella mia crescita come <strong>Web Developer</strong>,
ho integrato nel mio workflow programmi come <strong>Figma e Adobe XD</strong>.
Acquisire competenze nella <strong>progettazione</strong> è uno step fondamentale nel percorso di un web developer.`,
      foto: `../../../assets/difference-between-ux-ui-ux-ui-min-6cd3a171087987d31ecdb67ad67c0ab8136242f7b4e476a0e509017aa8bbc755.png`
    }
  ]


  card3 = [
    {
      titolo: `Back-End Java + Spring`,
      testo: `Una parte del mio percorso di apprendimento è stata dedicata all’ambito <strong>Back-End</strong>, sfruttando le tecnologie di <strong>Java e Spring Boot</strong>.`,
      foto: `../../../assets/1_aXe6MaOyhdIP5WqdPHhSFw.png`
    }
  ]
  formatText(text: string): string {
    return text.replace(/<strong>/g, '<strong class="fw-bold">');
  }
}
