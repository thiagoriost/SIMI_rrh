import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MotivosDevolucion, dataMotivosDevolucion, dataPrueba } from '@app/core/services/db_interfaces/Motivos_Devolucion';
import { directus } from '@app/core/services/directus';
import { constantesNewIdea } from '@app/share/utils/constas';

@Component({
  selector: 'app-revisiones',
  standalone: true,
  imports: [MatExpansionModule, MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './revisiones.component.html',
  styleUrl: './revisiones.component.scss'
})
export class RevisionesComponent implements OnInit{


  @Input() Id_Idea_Investigacion_Seleccionada: string = '';
  Motivos_Devolucion: dataMotivosDevolucion[] = [];
  panelOpenState: boolean=false;

  /**
   * Se ejecuta al inicial el componente
   * ejecuta lógica para traer y renderizar Motivos_Devolucion
   */
  ngOnInit(): void {
    this.get_Motivos_Devolucion();
  }

  /**
   * metodo que consulta los motivos de devolución de una idea especifica
   */
  async get_Motivos_Devolucion() {
    const queryParams = {
      filter: {
        Id_Idea_Investigacion: {
          _eq: this.Id_Idea_Investigacion_Seleccionada,
        },
      },
      // sort: ['Codigo_Idea'],
      fields:['*', 'Id_Idea_Investigacion.*']
    }
    // const response_MotivosDevolucion: MotivosDevolucion = await directus.items(constantesNewIdea.DB.Motivos_Devolucion).readByQuery(queryParams) as MotivosDevolucion;
    const response_MotivosDevolucion: MotivosDevolucion = dataPrueba;
    console.log({response_MotivosDevolucion});
    this.ajustarDataToReder(response_MotivosDevolucion.data)
  }

  ajustarDataToReder(dataMotivosDevolucion: dataMotivosDevolucion[]) {
    console.log({dataMotivosDevolucion});
    // logica pendiente para ajustarDataToReder

    /* ////////////// */
    this.Motivos_Devolucion = dataMotivosDevolucion;
  }

  atenderDevolucion(MotivoDevolucionSeleccionado: dataMotivosDevolucion) {
    console.log({MotivoDevolucionSeleccionado});
  }

}
