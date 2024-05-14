export interface MotivosDevolucion {
  data: dataMotivosDevolucion[];
}

export interface dataMotivosDevolucion {
  Fecha_Creacion:        string;
  Fecha_Estado:          string;
  Id_Estado_Idea:        string;
  Id_Estado:             IDEstado;
  Id_Idea_Investigacion: string;
  Motivo_Devolucion:     null | string;
  Tiempo_Subsanacion:    number;
  Usuario_Creador:       string;
}

export interface IDEstado {
  Id_Valores_Dominio: string;
  Tipo_Dominio:       string;
  Valor_Dominio:      string;
  Descripcion_Valor:  string;
  Id_Valor_Dom_Padre: null;
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
