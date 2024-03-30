import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router} from '@angular/router';
import { StoreApp } from '../../../../core/store/storeApp';

@Component({
  selector: 'app-new-convocatoria-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './new-convocatoria-page.component.html',
  styleUrl: './new-convocatoria-page.component.scss'
})
export class NewConvocatoriaPageComponent implements OnInit {

  store = inject(StoreApp)
  private route = inject(ActivatedRoute)
  convocatoriaId: string | null | undefined;
  tittleConcocatoria: string = "¿Como medir la contaminación del Río Bogotá?";
  fechaConvocatoria: string = "Abril 01-2024";
  detalleConvocatoria: string = `
  Aliq uip ex id cupidatat iq uip ex id cupidatat uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate cu uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate1
  Aliq uip ex id cupidatat iq uip ex id cupidatat uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate cu uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate2
  Aliq uip ex id cupidatat iq uip ex id cupidatat uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate cu uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate2
  Aliq uip ex id cupidatat iq uip ex id cupidatat uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate cu uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate2
  Aliq uip ex id cupidatat iq uip ex id cupidatat uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate cu uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate2
  Aliq uip ex id cupidatat iq uip ex id cupidatat uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate cu uip ex id uip ex id cupidatat voluptate culp cupidatat voluptate2

  `;
  padding: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.convocatoriaId = this.route.snapshot.paramMap.get('id');
    console.log(this.convocatoriaId);
    console.log("leng => ", this.detalleConvocatoria.length);
    this.ajustePaddingDetalleConvocatoria()

  }
  ajustePaddingDetalleConvocatoria() {
    if (this.detalleConvocatoria.length < 1500) {
      this.padding = '30px 20px 20px 10px'
    } else {
      this.padding = '100px 20px 20px 10px'
    }
  }
  goIdea(idIdea: string|null|undefined) {
    this.store.changeSpinner(true);
    setTimeout(() => {
      this.store.changeSpinner(false);
      this.router.navigate([`/home/idea/${this.convocatoriaId}`])
    }, 3000);
  }









}
