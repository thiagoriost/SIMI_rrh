import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tipo-proyecto',
  standalone: true,
  imports: [MatCheckboxModule, MatFormFieldModule],
  templateUrl: './tipo-proyecto.component.html',
  styleUrl: './tipo-proyecto.component.scss'
})
export class TipoProyectoComponent implements OnInit{
  @Input() getErrorCampo: any
  @Input() validacionCampo: any
  @Input() banderaValidacionTipoProyectoSeleccionando: boolean = false;
  @Input() formulario: any
  tiposProyecto: intf_dataTiposProyecto[] = [];

  ngOnInit(): void {
    // this.editor = new Editor();
    this.getTiposProyecto();
  }

  getTiposProyecto(){
    // espacio para consultar data desde DB
    let dataTestRequest: intf_dataTiposProyecto[] = [
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
  checkedTP(TP: intf_dataTiposProyecto, adicionarTipoProyecto: boolean) {
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


export interface intf_dataTiposProyecto {
  id_tipoProyecto: string;
  tipoProyecto: string;
  field: string;
}
