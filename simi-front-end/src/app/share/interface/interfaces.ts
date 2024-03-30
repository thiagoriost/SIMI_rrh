export interface Response_Ideas_Investigacion {
  data: Ideas_Investigacion[];
}

export interface Ideas_Investigacion {
  Id_Idea_Investigacion:    string;
  Usuario_Creador:          string;
  Fecha_Creacion:           string;
  Id_Convocatoria:          null;
  Codigo_Idea:              string;
  Entidad:                  string;
  Id_Macroproyecto:         null;
  Id_Dependencia_IGAC:      string;
  URL_Cronograma:           string;
  Fecha_Idea:               string;
  Id_Ponente:               string;
  Titulo_Idea:              string;
  Investigacion_Cientifica: string;
  Desarrollo_Tecnologico:   string;
  Tiempo_Ejecucion:         string;
  Innovacion:               string;
  Lugar_Ejecucion:          string;
  Nuevo_Conocimiento:       string;
  Tecnologico_Innovacion:   string;
  Apropiacion_Conocimiento: string;
  Formacion_CTEL:           string;
  Problema_Idea:            string;
  Antecedentes:             string;
  Justificacion:            string;
  Descripcion_Idea:         string;
  Bibliografia_Empleada:    string;
  Validada:                 string | null;
  Fecha_Validacion:         string | null;
}

export interface int_Login {
  data: int_DataLogin;
}

export interface int_DataLogin {
  access_token: string;
  expires:      number;
}
