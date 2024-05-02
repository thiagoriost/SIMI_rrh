import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router} from '@angular/router';
import { StoreApp } from '../../../../core/store/storeApp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../../../../share/components/base/base.component';

/**
 * Componente que renderiza cada convocatoria
 */
@Component({
  selector: 'app-new-convocatoria-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './new-convocatoria-page.component.html',
  styleUrl: './new-convocatoria-page.component.scss'
})
export class NewConvocatoriaPageComponent extends BaseComponent implements OnInit {

  /**
   * Instanciación del store
   * para:
   *  obtener convocatoria seleccionada
  */
  store = inject(StoreApp)
  private route = inject(ActivatedRoute) // instanciación router
  convocatoriaId: string | null | undefined; //parametro que se utilizara para la url ruta
  tittleConcocatoria: string = ""; // titulo de la convocatoria
  detalleConvocatoria: string = ``; // detalle convocatoria
  padding: string = ''; // ajute dinamico de paddin en le div detalle convocatoria
  fechaLimite: Date; // información de la fecha limite
  responsable: string; // información con el nombre del responsable de la convocatoria
  imgBackGround: string | undefined; //url donde se aloja la imagen

  constructor(router: Router, _snackBar: MatSnackBar) {
    super(router, _snackBar);
    const convocatoriaSelected = this.store.convocatoriaSelected()
    if(!convocatoriaSelected.Codigo_Convocatoria)this.router.navigate([`/home`]);//si la convocatoria no trae un codigo lo redireccina al home
    // mapea los campos para la vista convocatoria
    this.convocatoriaId = convocatoriaSelected.Id_Convocatoria;
    this.tittleConcocatoria = convocatoriaSelected.Nombre_Convocatoria;
    this.detalleConvocatoria = convocatoriaSelected.Descripcion;
    this.fechaLimite = convocatoriaSelected.Fecha_Limite
    this.responsable = convocatoriaSelected.MetadataUser?.first_name + " " +  convocatoriaSelected.MetadataUser?.last_name || convocatoriaSelected.Id_Responsable;
    this.imgBackGround = convocatoriaSelected.img;
  }

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem("auth_token")) { // valida si la sesion esta activa
      this.convocatoriaId = this.route.snapshot.paramMap.get('id');
      this.ajustePaddingDetalleConvocatoria(); // Ajuste el tamaño del paddin segun el tamaño del texto
    } else {
      this.rederMensajeToast(`Sesión expirada`);
      this.router.navigate([`/login`]);
    }

  }

  /**
   * Ajusta el pading segun tamaño de la detalle de la convocatoria
   */
  ajustePaddingDetalleConvocatoria() {
    if (this.detalleConvocatoria.length < 1500) {
      this.padding = '30px 20px 20px 10px'
    } else {
      this.padding = '100px 20px 20px 10px'
    }
  }

  /**
   * redirecciona a la pagina idea con un id convocatoria seleccionado
   */
  goIdea() {
    this.router.navigate([`/home/idea/${this.convocatoriaId}`])
  }









}
