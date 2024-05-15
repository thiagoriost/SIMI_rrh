export interface Respons_DB_Ideas_Investigacion {
  data: dataIdeaSeleccionada[];
}

export interface IdeasInvestigacion {
  Codigo_Idea:              string;
  Desarrollo_Tecnologico:   null | string;
  Descripcion_Valor_Estado:  string;
  email: string;
  estados:                  Estado[];
  Fecha_Creacion:           string;
  Id_Idea_Investigacion:    string;
  Innovacion:               null | string;
  Investigacion_Cientifica: null | string;
  nombreProponente: string;
  tipoProyecto: string;
  Titulo_Idea:              string;
}


export interface Estado {
  Motivo_Devolucion:     string;
  Tiempo_Subsanacion:    number;
  Id_Estado_Idea:        string;
  Fecha_Creacion:        Date | string;
  Id_Idea_Investigacion: string;
  Fecha_Estado:          Date | string;
  Usuario_Creador:       UsuarioCreador;
  Id_Estado:             IDEstado;
}

export interface IDEstado {
  Id_Valores_Dominio: string;
  Tipo_Dominio:       string;
  Valor_Dominio:      string;
  Descripcion_Valor:  string;
  Id_Valor_Dom_Padre: null | string;
}
////////////////////////

export interface RespNewIdeaIdeasInvestigacion {
  data: dataIdeaSeleccionada[];
}

export interface dataIdeaSeleccionada {
  [key: string]: string | null | Estado[] | LineasInvestigacion[] | UsuarioCreador;
  Antecedentes:              string;
  Apropiacion_Conocimiento:  string;
  Bibliografia_Empleada:     string;
  Codigo_Idea:               string;
  Desarrollo_Tecnologico:    string;
  Descripcion_Idea:          string;
  Entidad:                   string;
  estados:                   Estado[] ;
  Fecha_Creacion:            string;
  Fecha_Idea:                string;
  Fecha_Validacion:          string;
  Formacion_CTEL:            string;
  Id_Convocatoria:           string | null;
  Id_Dependencia_IGAC:       string | null;
  Id_Idea_Investigacion:     string;
  Id_Macroproyecto:          string | null;
  Id_Ponente:                string;
  Innovacion:                string;
  Investigacion_Cientifica:  string;
  Justificacion:             string;
  lineas_investigacion:      LineasInvestigacion[];
  Lugar_Ejecucion:           string;
  Nuevo_Conocimiento:        string;
  Problema_Idea:             string;
  Tecnologico_Innovacion:    string;
  Tiempo_Ejecucion_Proyecto: string;
  Titulo_Idea:               string;
  URL_Cronograma:            string;
  Usuario_Creador:           UsuarioCreador;
  Validada:                  string;
  nombreProponente: string;
  email:string;
}

export interface LineasInvestigacion {
  Id_Linea_Investigacion: IDLineaInvestigacion;
}

export interface IDLineaInvestigacion {
  Id_Linea_Investigacion:       string;
  Usuario_Creador:              string;
  Fecha_Creacion:               Date;
  Nombre_Linea_investigacion:   string;
  Objetivo_Linea_Investigacion: string;
  Pertenencia_Linea:            string;
  Logros_Linea:                 string;
  Efecto_Linea:                 string;
  Id_Grupo_Investigacion:       IDGrupoInvestigacion;
}

export interface IDGrupoInvestigacion {
  Id_Grupo_Investigacion: string;
  Usuario_Creador:        string;
  Fecha_Creacion:         Date;
  Nombre_Grupo:           string;
  Objetivos_Grupo:        string;
  lineas_investigacion:   string[];
}

export interface UsuarioCreador {
  theme_light_overrides: null | string;
  theme_dark_overrides:  null | string;
  id:                    string;
  first_name:            string;
  last_name:             string;
  password:              string;
  location:              null | string;
  title:                 null | string;
  description:           null | string;
  tags:                  null | string;
  avatar:                null | string;
  tfa_secret:            null | string;
  status:                string;
  role:                  string;
  token:                 null | string;
  last_access:           Date | string;
  last_page:             string;
  theme_light:           null | string;
  provider:              string;
  external_identifier:   null | string;
  email:                 string;
  auth_data:             null | string;
  appearance:            null | string;
  email_notifications:   boolean;
  theme_dark:            null | string;
  language:              null | string;
}





