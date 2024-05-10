import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { directus } from '@app/core/services/directus';

import { DatumValoresDominio, ValoresDominio } from '@app/core/services/db_interfaces/Valores_Dominio';
import { dataIdeaSeleccionada } from '@app/core/services/db_interfaces/Ideas_Investigacion';
import { constantesApp, constantesNewIdea, modoVistaFormularioIdeaInvestigacion } from '@app/share/utils/constas';
import { StoreApp } from '@app/core/store/storeApp';

/**
 * componente encargado de renderizar la data general del proponente
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-general-proponente',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatFormFieldModule, MatRadioModule, MatSelectModule,
    MatInputModule, MatDatepickerModule, ReactiveFormsModule
  ],
  templateUrl: './general-proponente.component.html',
  styleUrl: './general-proponente.component.scss'
})
export class GeneralProponenteComponent implements OnInit {

  @Input({ required: true })
  formularioPadre!: FormGroup;// formulario desde el padre

  @Input() modoVista: string = constantesNewIdea.modoVistaFormularioIdeaInvestigacion.modo_nueva_idea; // bandera para saber si estamos en modo ver o nueva idea
  @Input() validacionFecha: boolean = false;
  @Input() validacionCampo: ((field: string) => boolean | null) = () => null;
  @Input() validacionEntidad: boolean = false;
  Interna: string = constantesNewIdea.Interna; // constantes
  Externa: string = constantesNewIdea.Externa; // constantes
  EntidadInterna: boolean = false; // bandera del check donde el usuario selecciona el tipo de entidad a registrar
  EntidadExterna: boolean = false; // selecciona entidad externa
  Entidades: DatumValoresDominio[] = []; // almacenas las entidades consultadas desde directus
  modos_VistaFormulario: modoVistaFormularioIdeaInvestigacion = constantesNewIdea.modoVistaFormularioIdeaInvestigacion; // constantes modo ver, nueva o devolución de una nueva idea


  /**
   * Instanciación del store
   * para:
   *  obtener la idea seleccionada
  */
  store = inject(StoreApp)

/**
 * Verifica si se deve consultar los dominios o si ya vienen de una idea seleccionada
 */
  ngOnInit(): void {
    const ideaSeleccionanda: dataIdeaSeleccionada = this.store.ideaSeleccionanda();
    console.log(this.modoVista);
    console.log({ideaSeleccionanda});
    console.log(this.formularioPadre);



    if (this.modoVista !== this.modos_VistaFormulario.modo_ver) {
      this.getValores_Dominio_dependencia();
    }
  }


  /**
   * Obitene desde directus los valores dominio en este caso
   * los de tipo dependencia IGAC
   */
  async getValores_Dominio_dependencia() {
    const Valores_Dominio = directus.items(constantesApp.Valores_Dominio);
    const filterValores_Dominio: ValoresDominio = await Valores_Dominio.readByQuery({
      filter: {
        Tipo_Dominio: {
          _contains: constantesApp.DEPENDIGAC,
        },
      },
    }) as ValoresDominio;
    this.Entidades = filterValores_Dominio.data;
    this.mostrarCampoEntidad();

  }

  /**
   * Si el formulario es de tipo devolución filtra el nombre de la entidad
   * para saber si existe entre las entidades internas, y activa el correspondiente radioButton
   */
  mostrarCampoEntidad(){
    if (this.modoVista == this.modos_VistaFormulario.modo_devolucion) {
      if (this.Entidades.filter(e => e.Descripcion_Valor === this.formularioPadre.value.Entidad).length > 0) {
        this.EntidadInterna = true
        this.EntidadExterna = false
      } else {
        this.EntidadInterna = false
        this.EntidadExterna = true
      }

    }
  }

  /**
   * Metodo para renderizar el tipo de entidad que el usuario desea informar
   * @param $event camptura el radioButtom seleccinado
   */
  onCheckboxChangeEntidadInterna($event: MatRadioChange) {

    if ($event.value == constantesNewIdea.Interna) {
      this.EntidadInterna = true
      this.EntidadExterna = false
    } else {
      this.EntidadInterna = false
      this.EntidadExterna = true
      // this.formularioPadre?.controls["Entidad"].setValue('')
    }
  }

  /**
   * Ayuda al padre a validar campo fecha requerido
   * @param fechaSeleccionada string con fecha seleccionada
   */
  fechaSelected(fechaSeleccionada: string) {
    this.validacionFecha = fechaSeleccionada?false:true;
  }

  /**
   *
   * @param opcionSeleccionada string con opcion entidad seleccionada
   */
  changeSelect(opcionSeleccionada: string) {
    this.validacionEntidad = opcionSeleccionada?false:true;
  }

}
