import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router} from '@angular/router';
import { StoreApp } from '../../../../core/store/storeApp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { usersSIMI } from '../../../../core/api/api';

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
  fechaConvocatoria: string;
  detalleConvocatoria: string = ``;
  padding: string = '';
  fechaLimite: Date;
  responsable: string;
  imgBackGround: string | undefined;

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    const convocatoriaSelected = this.store.convocatoriaSelected()

    if(!convocatoriaSelected.Codigo_Convocatoria)this.router.navigate([`/home`]);
    console.log({convocatoriaSelected});

    this.convocatoriaId = convocatoriaSelected.Id_Convocatoria;
    this.tittleConcocatoria = convocatoriaSelected.Nombre_Convocatoria;
    this.detalleConvocatoria = convocatoriaSelected.Descripcion;
    this.fechaLimite = convocatoriaSelected.Fecha_Limite
    this.fechaConvocatoria = new Date(convocatoriaSelected.Fecha_Creacion).toLocaleDateString()
    this.responsable = convocatoriaSelected.MetadataUser?.first_name + " " +  convocatoriaSelected.MetadataUser?.last_name || convocatoriaSelected.Id_Responsable;
    this.imgBackGround = convocatoriaSelected.img;
  }

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem("auth_token")) {
      this.convocatoriaId = this.route.snapshot.paramMap.get('id');
      console.log(this.convocatoriaId);
      console.log("leng => ", this.detalleConvocatoria.length);
      this.ajustePaddingDetalleConvocatoria()
      //


      const user = await usersSIMI();
//
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
  ajustePaddingDetalleConvocatoria() {
    if (this.detalleConvocatoria.length < 1500) {
      this.padding = '30px 20px 20px 10px'
    } else {
      this.padding = '100px 20px 20px 10px'
    }
  }
  goIdea(idIdea: string|null|undefined) {
    this.router.navigate([`/home/idea/${this.convocatoriaId}`])
      this.router.navigate([`/home/idea/${this.convocatoriaId}`])
  }









}
