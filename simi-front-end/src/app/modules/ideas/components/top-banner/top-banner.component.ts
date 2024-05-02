import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { SwiperComponent } from '../../../../share/components/swiper/swiper.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { directus } from '../../../../core/services/directus';
import { Intf_user, Users, intf_convocatoria, responseConvocatorias } from '../../../../share/interface/interfaces';
import { StoreApp } from '../../../../core/store/storeApp';
import { urlImg } from '../../../../share/utils/constas';
import { BaseComponent } from '../../../../share/components/base/base.component';

/**
 * Componente encargado de renderizar el swipper con las convocatorias existentes
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [SwiperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.scss'
})
export class TopBannerComponent extends BaseComponent implements OnInit{

  /**
   * Instanciación del store
   * para:
   *  guardar conovacatoria seleccionada
   */
  store = inject(StoreApp) //instanciación store
  convocatorias: intf_convocatoria[] = []; // guardartas las convocatorias

  constructor(router: Router, _snackBar: MatSnackBar){
    super(router, _snackBar);
  }

  /**
   * Verifica si existe token, de lo contrario redirige a la pagina login
   * si existe token ejecuta logica para traer el listado de convocatorias
   * para ser renderizadas en el swipper
   */
  ngOnInit(): void {
    if (localStorage.getItem("auth_token")) {// valida si existe token de sesion
      this.getConvocatorias()
    } else {
      this.rederMensajeToast(`Sesión expirada`);
      this.router.navigate([`/login`]);
    }
  }

  /**
   * Optiene las convocatorias desde directus
   * Optiene los usuarios desde directus
   * Agrega a cada convocatoria la data del usuario que creo la convocatoria
   * Agrega a cada convocatoria la img del poster
   */
  async getConvocatorias() {
    const getConvocatorias: responseConvocatorias = await directus.items('Convocatorias').readByQuery({ sort: ['Id_Convocatoria'] }) as responseConvocatorias;
    const convocatorias:intf_convocatoria[] = getConvocatorias.data;
    const getUsers: Users = await directus.items('directus_users').readByQuery({ fields:'*' }) as Users; // trae todos los usuarios
    const users: Intf_user[] = getUsers.data;
    for (let conv = 0; conv < convocatorias.length; conv++) {
      convocatorias[conv]["MetadataUser"] = users.filter(e => e.id == convocatorias[conv].Id_Responsable)[0]
      convocatorias[conv]["img"] = `${urlImg}${convocatorias[conv].Poster_Convocatoria}?fit=contain&width=2000&height=2000&quality=100`
    }
    this.convocatorias = [...this.convocatorias, ...convocatorias]
  }

  /**
   * Guarda en el store la convocatoria seleccionada
   * Redirecciona a la pagina convocatira con el codigo convocatoria seleccionada
   */
  goConvocatoria(convSelected: intf_convocatoria) {
    this.store.setConvocatoriaSelected(convSelected)
    this.router.navigate([`/home/convocatoria/${convSelected.Codigo_Convocatoria}`]);
  }

}
