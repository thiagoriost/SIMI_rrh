import { DatumLineasInvestigacion } from "./Lineas_Investigacion";

export interface GruposInvestigacion {
  data: DatumGruposInvestigacion[];
}

export interface DatumGruposInvestigacion {
  Nombre_Grupo:           string;
  Objetivos_Grupo:        string;
  Id_Grupo_Investigacion: string;
  lineasInvestigacion?: DatumLineasInvestigacion[]
}


export const MocoResponseGruposInvestigacion = {
  "data": [
      {
          "Id_Grupo_Investigacion": "bc0821fc-6f59-4e1b-b30a-e147913a1773",
          "Usuario_Creador": "d1d9ab4d-c14a-4abc-b849-16e11bf143c1",
          "Fecha_Creacion": "2024-04-04T14:34:45.942Z",
          "Nombre_Grupo": "GEOMATICA",
          "Objetivos_Grupo": "Investigar sobre Geomatica"
      },
      {
          "Id_Grupo_Investigacion": "e29e868a-c81d-4050-a845-da54bd9615f2",
          "Usuario_Creador": "d1d9ab4d-c14a-4abc-b849-16e11bf143c1",
          "Fecha_Creacion": "2024-04-04T14:34:54.489Z",
          "Nombre_Grupo": "SUELOS Y ECOLOGÍA",
          "Objetivos_Grupo": "SUELOS Y ECOLOGÍA"
      },
      {
          "Id_Grupo_Investigacion": "fe3284ee-4edd-4adf-aeaa-3498cacb369b",
          "Usuario_Creador": "d1d9ab4d-c14a-4abc-b849-16e11bf143c1",
          "Fecha_Creacion": "2024-04-04T14:35:01.514Z",
          "Nombre_Grupo": "ESTUDIOS TERRITORIALES",
          "Objetivos_Grupo": "ESTUDIOS TERRITORIALES"
      },
      {
          "Id_Grupo_Investigacion": "fe3284ee-4edd-4adf-aeaa-3498cacb369c",
          "Usuario_Creador": "d1d9ab4d-c14a-4abc-b849-16e11bf143c1",
          "Fecha_Creacion": "2024-04-04T14:35:01.514Z",
          "Nombre_Grupo": "GRUPO PRUEBA",
          "Objetivos_Grupo": "GRUPO PRUEBA"
      },
      {
          "Id_Grupo_Investigacion": "fe3284ee-4edd-4adf-aeaa-3498cacb369D",
          "Usuario_Creador": "d1d9ab4d-c14a-4abc-b849-16e11bf143c1",
          "Fecha_Creacion": "2024-04-04T14:35:01.514Z",
          "Nombre_Grupo": "GRUPO PRUEBA2",
          "Objetivos_Grupo": "GRUPO PRUEBA2"
      },
      {
          "Id_Grupo_Investigacion": "fe3284ee-4edd-4adf-aeaa-3498cacb369E",
          "Usuario_Creador": "d1d9ab4d-c14a-4abc-b849-16e11bf143c1",
          "Fecha_Creacion": "2024-04-04T14:35:01.514Z",
          "Nombre_Grupo": "GRUPO PRUEBA3",
          "Objetivos_Grupo": "GRUPO PRUEBA3"
      }
  ]
}
