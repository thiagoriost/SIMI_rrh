import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MotivosDevolucion, dataMotivosDevolucion, dataPrueba } from '@app/core/services/db_interfaces/Motivos_Devolucion';

/**
 * Componente encargado de renderizar las devoluciones por idea de investigación
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-revisiones',
  standalone: true,
  imports: [MatExpansionModule, MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './revisiones.component.html',
  styleUrl: './revisiones.component.scss'
})
export class RevisionesComponent implements OnInit{


  @Input() Id_Idea_Investigacion_Seleccionada: string = ''; // data de entrada con la idea seleccionada
  Motivos_Devolucion: dataMotivosDevolucion[] = []; // arreglo de motivos de devolución a ser renderizdos
  panelOpenState: boolean=false; // variable mostrar

  /**
   * Se ejecuta al inicial el componente
   * ejecuta lógica para traer y renderizar Motivos_Devolucion
   */
  ngOnInit(): void {
    this.get_Motivos_Devolucion();
  }

  /**
   * metodo que consulta los motivos de devolución de una idea de investigacion especifica
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
    this.ajustarDataToReder(response_MotivosDevolucion.data)
  }

  /**
   * metodo para alista la data segun lo requerido para ser renderizada
   * @param dataMotivosDevolucion trae la data desde el backend
   */
  ajustarDataToReder(dataMotivosDevolucion: dataMotivosDevolucion[]) {
    // logica pendiente para ajustarDataToReder

    /* ////////////// */
    this.Motivos_Devolucion = dataMotivosDevolucion;
  }


}
