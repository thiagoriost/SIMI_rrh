

export interface LineasInvestigacionModoVer {
  Id_Linea_Investigacion?:       string;
  Usuario_Creador:              string;
  Fecha_Creacion:               string;
  Nombre_Linea_investigacion:   string;
  Objetivo_Linea_Investigacion: string;
  Pertenencia_Linea:            string;
  Logros_Linea:                 string;
  Efecto_Linea:                 string;
  Id_Grupo_Investigacion?:       GruposinvestigacionModoVer;
}

export interface GruposinvestigacionModoVer {
  Id_Grupo_Investigacion?: string;
  Usuario_Creador:        string;
  Fecha_Creacion:         string;
  Nombre_Grupo:           string;
  Objetivos_Grupo:        string;
  lineas_investigacion?:   string[];
  lineasInvestigacion?:   LineasInvestigacionModoVer[];
}

