import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Estado } from '@app/core/services/db_interfaces/Ideas_Investigacion';
import { StoreApp } from '@app/core/store/storeApp';

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


  /**
   * Instanciación del store
   * para:
   *  obtener la idea seleccionada
  */
  store = inject(StoreApp)
  @Input() Id_Idea_Investigacion_Seleccionada: string = ''; // data de entrada con la idea seleccionada
  // Motivos_Devolucion: dataMotivosDevolucion[] = []; // arreglo de motivos de devolución a ser renderizdos
  panelOpenState: boolean=false; // variable mostrar
  Motivos_Devolucion: Estado[] = [];


  /**
   * Se ejecuta al inicial el componente
   * ejecuta lógica para traer y renderizar Motivos_Devolucion
   */
  ngOnInit(): void {
    const ideaSeleccionanda = this.store.ideaSeleccionanda()
    this.Motivos_Devolucion = ideaSeleccionanda.estados
  }



}
