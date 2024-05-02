export interface MotivosDevolucion {
  data: dataMotivosDevolucion[];
}

export interface dataMotivosDevolucion {
  Id_Proyecto_Investigacion: string;
  Id_Motivo:                 string;
  Motivo_Devolucion:         string;
  Tiempo_subsanacion:        number;
  Id_Idea_Investigacion:     IDIdeaInvestigacion;
}

export interface IDIdeaInvestigacion {
  Id_Idea_Investigacion:     string;
  Usuario_Creador:           string;
  Fecha_Creacion:            string;
  Id_Convocatoria:           string;
  Codigo_Idea:               string;
  Id_Macroproyecto:          string;
  Id_Dependencia_IGAC:       string;
  Entidad:                   string;
  Fecha_Idea:                string;
  Id_Ponente:                string;
  Titulo_Idea:               string;
  Investigacion_Cientifica:  string;
  Desarrollo_Tecnologico:    string;
  Innovacion:                string;
  URL_Cronograma:            string;
  Tiempo_Ejecucion_Proyecto: string;
  Lugar_Ejecucion:           string;
  Nuevo_Conocimiento:        string;
  Tecnologico_Innovacion:    string;
  Apropiacion_Conocimiento:  string;
  Formacion_CTEL:            string;
  Problema_Idea:             string;
  Antecedentes:              string;
  Justificacion:             string;
  Descripcion_Idea:          string;
  Bibliografia_Empleada:     string;
  Validada:                  string;
  Fecha_Validacion:          string;
  lineas_investigacion:      string[];
  estados:                   string[];
}

export interface DATA_INIT_MotivosDevolucion {
  Id_Proyecto_Investigacion: null;
  Id_Motivo:                 string;
  Motivo_Devolucion:         string;
  Tiempo_subsanacion:        number;
  Id_Idea_Investigacion:     DATA_INIT_IDIdeaInvestigacion;
}

export interface DATA_INIT_IDIdeaInvestigacion {
  Id_Idea_Investigacion:     string;
  Usuario_Creador:           string;
  Fecha_Creacion:            Date;
  Id_Convocatoria:           string;
  Codigo_Idea:               string;
  Id_Macroproyecto:          null;
  Id_Dependencia_IGAC:       null;
  Entidad:                   string;
  Fecha_Idea:                Date;
  Id_Ponente:                string;
  Titulo_Idea:               string;
  Investigacion_Cientifica:  string;
  Desarrollo_Tecnologico:    string;
  Innovacion:                string;
  URL_Cronograma:            string;
  Tiempo_Ejecucion_Proyecto: string;
  Lugar_Ejecucion:           string;
  Nuevo_Conocimiento:        string;
  Tecnologico_Innovacion:    string;
  Apropiacion_Conocimiento:  string;
  Formacion_CTEL:            string;
  Problema_Idea:             string;
  Antecedentes:              string;
  Justificacion:             string;
  Descripcion_Idea:          string;
  Bibliografia_Empleada:     string;
  Validada:                  string;
  Fecha_Validacion:          Date;
  lineas_investigacion:      string[];
  estados:                   string[];
}

export const dataPrueba = {
  data:[
    {
      Id_Proyecto_Investigacion: '',
      Id_Motivo:                 "132456",
      Motivo_Devolucion:         "devolucion prueba 1",
      Tiempo_subsanacion:        4,
      Id_Idea_Investigacion:     {
        Id_Idea_Investigacion:     'string',
        Usuario_Creador:           'string',
        Fecha_Creacion:            'Date',
        Id_Convocatoria:           'string',
        Codigo_Idea:               'string',
        Id_Macroproyecto:          'null',
        Id_Dependencia_IGAC:       'null',
        Entidad:                   'string',
        Fecha_Idea:                'Date',
        Id_Ponente:                'string',
        Titulo_Idea:               'string',
        Investigacion_Cientifica:  'string',
        Desarrollo_Tecnologico:    'string',
        Innovacion:                'string',
        URL_Cronograma:            'string',
        Tiempo_Ejecucion_Proyecto: 'string',
        Lugar_Ejecucion:           'string',
        Nuevo_Conocimiento:        'string',
        Tecnologico_Innovacion:    'string',
        Apropiacion_Conocimiento:  'string',
        Formacion_CTEL:            'string',
        Problema_Idea:             'string',
        Antecedentes:              'string',
        Justificacion:             'string',
        Descripcion_Idea:          'string',
        Bibliografia_Empleada:     'string',
        Validada:                  'string',
        Fecha_Validacion:          'Date',
        lineas_investigacion:      [],
        estados:                   [],
      },
    },
    {
      Id_Proyecto_Investigacion: '',
      Id_Motivo:                 "654789",
      Motivo_Devolucion:         "devolucion prueba 2",
      Tiempo_subsanacion:        6,
      Id_Idea_Investigacion:     {
        Id_Idea_Investigacion:     'string',
        Usuario_Creador:           'string',
        Fecha_Creacion:            'Date',
        Id_Convocatoria:           'string',
        Codigo_Idea:               'string',
        Id_Macroproyecto:          'null',
        Id_Dependencia_IGAC:       'null',
        Entidad:                   'string',
        Fecha_Idea:                'Date',
        Id_Ponente:                'string',
        Titulo_Idea:               'string',
        Investigacion_Cientifica:  'string',
        Desarrollo_Tecnologico:    'string',
        Innovacion:                'string',
        URL_Cronograma:            'string',
        Tiempo_Ejecucion_Proyecto: 'string',
        Lugar_Ejecucion:           'string',
        Nuevo_Conocimiento:        'string',
        Tecnologico_Innovacion:    'string',
        Apropiacion_Conocimiento:  'string',
        Formacion_CTEL:            'string',
        Problema_Idea:             'string',
        Antecedentes:              'string',
        Justificacion:             'string',
        Descripcion_Idea:          'string',
        Bibliografia_Empleada:     'string',
        Validada:                  'string',
        Fecha_Validacion:          'Date',
        lineas_investigacion:      [],
        estados:                   [],
      },
    }
  ]
}
