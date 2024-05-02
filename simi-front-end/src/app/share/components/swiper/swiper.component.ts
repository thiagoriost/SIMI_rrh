import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SwiperContainer } from 'swiper/element/bundle';

/**
 * Componente encargado de renderizar las convocatorias
 */
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  standalone: true,
  imports: [MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements AfterViewInit {
  @Input() swiperContainerId = '';

  @ContentChild('swiper') swiperRef!: ElementRef<SwiperContainer>;

  constructor() {}

  /**
   * Metodo para inicializar el swiper
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      const shadowRoot = document
        .getElementById(this.swiperContainerId)
        ?.getElementsByClassName('swiper')[0]?.shadowRoot
        ?.firstChild as HTMLElement;
      shadowRoot.style.paddingBottom = '35px';
    }, 300);
  }

  /**
   * Metodo que controla el cambio de banner visualizado
   * @param prevOrNext almacena la vista actual renderizada
   */
  changeSlide(prevOrNext: number): void {

    if (prevOrNext === -1) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    } else {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }
}
