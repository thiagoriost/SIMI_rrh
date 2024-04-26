import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * Componente encargado de renderizar los tipos de proyecto
 * Investigación
 * Desarrollo tecnológico
 * Innovación
 * @author Rigoberto Rios rigoriosh@gmail.com
 */
@Component({
  selector: 'app-tipo-proyecto',
  standalone: true,
  imports: [MatCheckboxModule, MatFormFieldModule],
  templateUrl: './tipo-proyecto.component.html',
  styleUrl: './tipo-proyecto.component.scss'
})
export class TipoProyectoComponent implements OnInit{
  // @Input() getErrorCampo: (parametro: string) => string = (para)=>{return ''};
  @Input() banderaValidacionTipoProyectoSeleccionando: boolean = false; // valida si se selecciono la menos un tipo de proyecto
  @Input({required:true}) formulario: FormGroup | undefined // formulario desde el padre
  @Input() modoVer: boolean = false; // bandera para saber si estamos en modo ver o nueva idea
  tiposProyecto: intf_dataTiposProyecto[] = [];

  /**
   * Se ejecuta al inicial el componente
   * ejecuta lógica para traer y renderizar tipos de proyecto
   */
  ngOnInit(): void {
    // this.editor = new Editor();
    this.getTiposProyecto();
    console.log(this.formulario?.value);

  }

  /**
   * Metodo empleado para consultar desde directus los tipos de proyectos
   */
  getTiposProyecto(){
    // espacio para consultar data desde DB
    let dataTestRequest: intf_dataTiposProyecto[] = [ // data de prueba
      {
        id_tipoProyecto:'11111',
        tipoProyecto:'Investigación',
        field: 'Investigacion_Cientifica'
      },
      {
        id_tipoProyecto:'22222',
        tipoProyecto:'Desarrollo tecnológico',
        field: 'Desarrollo_Tecnologico'
      },
      {
        id_tipoProyecto:'33333',
        tipoProyecto:'Innovación',
        field: 'Innovacion'
      }
    ];
    this.tiposProyecto = dataTestRequest;
  }

  /**
   * Metodo para agregar y eliminar tipo de proyecto seleccionado
   * @param TP tipo de proyecto seleccionado
   * @param adicionarTipoProyecto bandera para saber si se debe adiconar o eliminar de los tipo de proyectos seleccionados
   */
  checkedTP(TP: intf_dataTiposProyecto, adicionarTipoProyecto: boolean) {
    if (this.formulario) {
      let tipoProyectoselected: intf_dataTiposProyecto[] = this.formulario.value.tipoProyectoselected;
      this.formulario.controls[TP.field].setValue(adicionarTipoProyecto);

      if (adicionarTipoProyecto) {
        this.formulario.controls['tipoProyectoselected'].setValue([...tipoProyectoselected, TP])

      } else {
        tipoProyectoselected = tipoProyectoselected.filter((tipoPro: { id_tipoProyecto: string; }) => tipoPro.id_tipoProyecto !== TP.id_tipoProyecto)
        this.formulario.controls['tipoProyectoselected'].setValue(tipoProyectoselected)
      }
      console.log(this.formulario.value.tipoProyectoselected.length < 1);
      this.banderaValidacionTipoProyectoSeleccionando = this.formulario.value.tipoProyectoselected.length < 1; // quita el msm de requerimiento del campo
      console.log(this.banderaValidacionTipoProyectoSeleccionando);
    }
  }
}


export interface intf_dataTiposProyecto {
  id_tipoProyecto: string;
  tipoProyecto: string;
  field: string;
}
