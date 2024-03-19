import { Component } from '@angular/core';
import { TopBannerComponent } from '../../components/top-banner/top-banner.component';
import { ListIdeasComponent } from '../../components/list-ideas/list-ideas.component';

@Component({
  selector: 'app-new-convocatoria-page',
  standalone: true,
  imports: [TopBannerComponent, ListIdeasComponent],
  templateUrl: './new-convocatoria-page.component.html',
  styleUrl: './new-convocatoria-page.component.scss'
})
export class NewConvocatoriaPageComponent {







}
