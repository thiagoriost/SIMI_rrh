
import { IDGrupoInvestigacion } from "./Grupos_Investigacion";

export interface LineasInvestigacion {
  data: DatumLineasInvestigacion[];
}

export interface DatumLineasInvestigacion {
  Efecto_Linea:                 string;
  Fecha_Creacion:               string;
  Id_Grupo_Investigacion?:       IDGrupoInvestigacion;
  Id_Linea_Investigacion?:       string;
  Logros_Linea:                 string;
  Nombre_Linea_investigacion:   string;
  Objetivo_Linea_Investigacion: string;
  Pertenencia_Linea:            string;
  Usuario_Creador:              string;
  checked:                      boolean;
}

