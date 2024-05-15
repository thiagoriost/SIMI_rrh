import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { dataIdeaSeleccionada } from '@app/core/services/db_interfaces/Ideas_Investigacion';
import { StoreApp } from '@app/core/store/storeApp';
import { BaseComponent } from '../base/base.component';
import { constantesNewIdea, modoVistaFormularioIdeaInvestigacion } from '@app/share/utils/constas';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

/**
 * Componente encargado de renderizar la tabla con las ideas consultadas por usuario
 * dependiendo del tamaño de la pantalla, renderiza el html para web o para movil
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-mat-table-web',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatPaginatorModule, MatTableModule,
    MatListModule, MatDividerModule, MatCardModule
  ],
  templateUrl: './mat-table-web.component.html',
  styleUrl: './mat-table-web.component.scss'
})
export class MatTableWebComponent extends BaseComponent implements AfterViewInit{


  /**
   * Instanciación del store
   * para:
   *  guardar idea seleccionada o la reinica
   */
  store = inject(StoreApp);
  modos_VistaFormulario: modoVistaFormularioIdeaInvestigacion = constantesNewIdea.modoVistaFormularioIdeaInvestigacion; // constantes modo ver, nueva o devolución de una nueva idea

  @Input({required:true})
  dataSource: MatTableDataSource<dataIdeaSeleccionada> = new MatTableDataSource<dataIdeaSeleccionada>(); // fuente de datos proveida por el componente padre
  @Input({required:true})
  displayedColumns: string[] = []; // arreglo de string con los campos, utilizado por el mat-table

  /**
   * controla el paginador de la tabla ideas
   */
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; //Asigna el paginador a la fuente de datos
  }

  /**
   *
   * @param ideaSeleccionanda
   * Toma la idea seleccionada y la envia al store
   * redirecciona a la pagina idea
   */
  goVerEditarIdea(ideaSeleccionanda: dataIdeaSeleccionada, modoVistaFormularioIdeaInvestigacion:string) {
    ideaSeleccionanda["nombreProponente"] = this.store.usuario().first_name + " " + this.store.usuario().last_name;
    ideaSeleccionanda["email"] = this.store.usuario().email;
    this.store.set_tipoVistaFormularioIdeaInvestigacion(modoVistaFormularioIdeaInvestigacion);
    this.store.setIdeaSeleccionanda(ideaSeleccionanda);// set ideaSeleccionada en el store
    this.router.navigate([`/home/idea/${ideaSeleccionanda.Id_Idea_Investigacion}`])
  }


}
