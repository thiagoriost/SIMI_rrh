import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  effect,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SwiperContainer } from 'swiper/element/bundle';

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
   * Metodo para realiar inicializar el swiper
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
    console.log(prevOrNext);

    if (prevOrNext === -1) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    } else {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }
}
