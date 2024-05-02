import { DatumLineasInvestigacion } from "./Lineas_Investigacion";

export interface GruposInvestigacion {
  data: IDGrupoInvestigacion[];
}

export interface DatumGruposInvestigacion {
  Id_Grupo_Investigacion?: string;
  lineasInvestigacion?:   DatumLineasInvestigacion[];
  Nombre_Grupo:           string;
  Objetivos_Grupo:        string;
}

export interface Grupoinvestigacion {
  Id_Linea_Investigacion: IDLineaInvestigacion;
}

export interface IDLineaInvestigacion {
  Efecto_Linea:                 string;
  Fecha_Creacion:               string;
  Id_Grupo_Investigacion:       IDGrupoInvestigacion;
  Id_Linea_Investigacion:       string;
  Logros_Linea:                 string;
  Nombre_Linea_investigacion:   string;
  Objetivo_Linea_Investigacion: string;
  Pertenencia_Linea:            string;
  Usuario_Creador:              string;
}

export interface IDGrupoInvestigacion {
  Fecha_Creacion:         string;
  Id_Grupo_Investigacion?: string;
  lineas_investigacion?:   string[];
  lineasInvestigacion?:   DatumLineasInvestigacion[];
  Nombre_Grupo:           string;
  Objetivos_Grupo:        string;
  Usuario_Creador:        string;
}

