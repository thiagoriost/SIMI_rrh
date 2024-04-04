import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { SwiperComponent } from '../../../../components/swiper/swiper.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { directus } from '../../../../core/services/directus';
import { Intf_user, Users, intf_convocatoria, responseConvocatorias } from '../../../../share/interface/interfaces';
import { StoreApp } from '../../../../core/store/storeApp';
import { getposter } from '../../../../core/api/api';


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
      convocatorias[conv]["img"] = 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340' // temporal hasta q se estables la img
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

  slidess = [
    {
      id:1001,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 1',
    },
     {
      id:1002,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 2',
    },
    {
      id:1003,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 3',
    },
    {
      id:1004,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 4',
    },
    {
      id:1005,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 5',
    },
    {
      id:1006,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 6',
    },
    {
      id:1007,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 7',
    },
    {
      id:1008,
      yek: 'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340',
      description: 'We will help you 8',
    },
    // Add more slides as needed
  ];

}
