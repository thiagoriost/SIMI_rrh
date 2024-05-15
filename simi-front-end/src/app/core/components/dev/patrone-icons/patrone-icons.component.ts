import { Component } from '@angular/core';

// == MATERIAL COMPONENTS == 
import {MatIconModule} from '@angular/material/icon';

/**
 * @description Componente para mostrar los iconos personalizados de SIMI
 * @autor Juan Carlos Valderrama Gonzalez
 */

@Component({
  selector: 'app-patrone-icons',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './patrone-icons.component.html',
  styleUrl: './patrone-icons.component.scss'
})
export class PatroneIconsComponent {

  // Lista de iconos personalizados para SIMI
  iconosSimi: Array<string> = [
    "icon-simi-flecha_arriba",
    "icon-simi-flecha_derecha",
    "icon-simi-flecha_izquierda",
    "icon-simi-flecha_abajo",
    "icon-simi-anteproyecto",
    "icon-simi-guardar",
    "icon-simi-proyecto",
    "icon-simi-ver_revisiones",
    "icon-simi-agregar_avance",
    "icon-simi-agregar_producto",
    "icon-simi-agregar",
    "icon-simi-en_proceso",
    "icon-simi-finalizado",
    "icon-simi-sin_iniciar",
    "icon-simi-borrar",
    "icon-simi-calendario",
    "icon-simi-cerrar",
    "icon-simi-configuracion",
    "icon-simi-editar",
    "icon-simi-idea",
    "icon-simi-informacion",
    "icon-simi-perfil",
    "icon-simi-quitar",
    "icon-simi-retomar",
    "icon-simi-salir",
    "icon-simi-ver_detalle"
  ];

}
