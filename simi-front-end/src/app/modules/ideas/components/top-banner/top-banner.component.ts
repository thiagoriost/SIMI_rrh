import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { SwiperComponent } from '../../../../components/swiper/swiper.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { directus } from '../../../../core/services/directus';
import { Intf_user, Users, intf_convocatoria, responseConvocatorias } from '../../../../share/interface/interfaces';
import { StoreApp } from '../../../../core/store/storeApp';
import { getposter } from '../../../../core/api/api';
import { urlImg } from '../../../../share/utils/constas';


@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [SwiperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.scss'
})
export class TopBannerComponent implements OnInit{

  store = inject(StoreApp)
  convocatorias: intf_convocatoria[] = [];

  constructor(private router: Router, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    // this.convocatorias = this.slidess
    if (localStorage.getItem("auth_token")) {
      this.getConvocatorias()
    } else {
      this._snackBar.open(`Sesión expirada`, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        direction:'ltr',
        data:{
          message:'hihihih'
        }
      });
      this.router.navigate([`/login`]);
    }
  }

  async getConvocatorias() {
    let getConvocatorias: responseConvocatorias = await directus.items('Convocatorias').readByQuery({ sort: ['Id_Convocatoria'] }) as responseConvocatorias;
    let convocatorias:intf_convocatoria[] = getConvocatorias.data;
    console.log({convocatorias});
    // let getConvocatorias: responseConvocatorias = await directus.items('Convocatorias').readByQuery({ limit: -1 }) as responseConvocatorias;
    // let getConvocatorias: responseConvocatorias = await directus.items('Convocatorias').readByQuery({ fields:'*' }) as responseConvocatorias;
    // let getConvocatorias = await directus.collections.readOne('Convocatorias') ;
    // let getCollections = await directus.collections.readAll() ; // trae todas las colleciones
    // console.log({getCollections});
    let getUsers: Users = await directus.items('directus_users').readByQuery({ fields:'*' }) as Users; // trae todos los usuarios
    let users: Intf_user[] = getUsers.data;
    console.log({users});
    for (let conv = 0; conv < convocatorias.length; conv++) {
      convocatorias[conv]["MetadataUser"] = users.filter(e => e.id == convocatorias[conv].Id_Responsable)[0]
      convocatorias[conv]["img"] = `${urlImg}${convocatorias[conv].Poster_Convocatoria}?fit=contain&width=2000&height=2000&quality=100`
      // convocatorias[conv]["img"] = 'http://172.19.3.143:8055/assets/e2c23cbf-f312-44f9-9306-62470b8afbed?fit=contain&width=2000&height=2000&quality=100' // temporal hasta q se estables la img
    }
    console.log({convocatorias});
    // let getConvocatorias =  await directus.items('Convocatorias').readMany(['00002']);
    /** logica para traer poster img */
    const token: string = localStorage.getItem("auth_token") || "";
    const respoPoster = await getposter(token)
    console.log({respoPoster});

    // let getPoster = await directus.files.import();

    this.convocatorias = [...this.convocatorias, ...convocatorias]

  }

  goConvocatoria(convSelected: intf_convocatoria) {
    console.log(convSelected);
    //set convocatoria seleccionada en el store, para ser trabajada en la page newConvocatoria
    this.store.setConvocatoriaSelected(convSelected)
    this.router.navigate([`/home/convocatoria/${convSelected.Codigo_Convocatoria}`]);
  }

  slidess: intf_convocatoria[] = [
    {
      Id_Convocatoria: '1001',
      Usuario_Creador: "Rigo",
      Fecha_Creacion: new Date().toLocaleDateString(),
      Codigo_Convocatoria: '555555',
      Nombre_Convocatoria: "Nombre_Convocatoria TEST",
      Id_Responsable: '656556132',
      Fecha_Inicio: new Date(),
      Fecha_Limite: new Date(),
      Descripcion: "Descripcion TEST",
      Poster_Convocatoria: '56446',
      MetadataUser: {
        external_identifier:null,
        email:'',
        auth_data:null,
        email_notifications:false,
        appearance:null,
        language:'',
        theme_dark:null,
        theme_light:null,
        theme_light_overrides:null,
        theme_dark_overrides:null,
        id:'',
        first_name:'Rigo',
        last_name:'Rios',
        password:'',
        location:null,
        title:'',
        description:null,
        tags:null,
        avatar:null,
        tfa_secret:null,
        status:'',
        role:'',
        token:null,
        last_access: new Date(),
        last_page:'',
        provider:'',
      },
      img: 'http://172.19.3.143:8055/assets/e2c23cbf-f312-44f9-9306-62470b8afbed?fit=contain&width=2000&height=2000&quality=100',
    },
    {
      Id_Convocatoria: '1001',
      Usuario_Creador: "Rigo",
      Fecha_Creacion: new Date(),
      Codigo_Convocatoria: '555555',
      Nombre_Convocatoria: "Nombre_Convocatoria TEST LDFKLJJKLDFJLKDFG",
      Id_Responsable: '656556132',
      Fecha_Inicio: new Date(),
      Fecha_Limite: new Date(),
      Descripcion: "Descripcion TEST",
      Poster_Convocatoria: '56446',
      MetadataUser: {
        external_identifier:null,
        email:'',
        auth_data:null,
        email_notifications:false,
        appearance:null,
        language:'',
        theme_dark:null,
        theme_light:null,
        theme_light_overrides:null,
        theme_dark_overrides:null,
        id:'',
        first_name:'Rigo',
        last_name:'Rios',
        password:'',
        location:null,
        title:'',
        description:null,
        tags:null,
        avatar:null,
        tfa_secret:null,
        status:'',
        role:'',
        token:null,
        last_access: new Date(),
        last_page:'',
        provider:'',
      },
      img: 'http://172.19.3.143:8055/assets/afde4b3d-7e68-4dc7-ade7-366029d330e2?fit=cover&width=2000',
    }
  ];

}
