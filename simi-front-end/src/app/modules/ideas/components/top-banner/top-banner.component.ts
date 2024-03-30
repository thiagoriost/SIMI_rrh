import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SwiperComponent } from '../../../../components/swiper/swiper.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [SwiperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.scss'
})
export class TopBannerComponent {

  constructor(private router: Router){}


  goConvocatoria(convSelected: { id: number; yek: string; description: string; }) {
    console.log(convSelected);
    this.router.navigate([`/home/convocatoria/${convSelected.id}`]);
  }

  slides = [
    {
      id:1001,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 1',
    },
     {
      id:1002,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 2',
    },
    {
      id:1003,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 3',
    },
    {
      id:1004,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 4',
    },
    {
      id:1005,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 5',
    },
    {
      id:1006,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 6',
    },
    {
      id:1007,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 7',
    },
    {
      id:1008,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 8',
    },
    // Add more slides as needed
  ];

}
