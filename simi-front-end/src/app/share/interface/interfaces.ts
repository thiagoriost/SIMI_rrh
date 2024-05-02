import { IdeasInvestigacion } from "../../core/services/db_interfaces/Ideas_Investigacion";

export interface Response_Ideas_Investigacion {
  data: IdeasInvestigacion[];
}


export interface int_Login {
  data: int_DataLogin;
}

export interface int_DataLogin {
  access_token: string;
  expires:      number;
}

export interface intf_camposFieldEditText{
  label: string;
  SubLabel: string;
  nameField: string;
  validacion: boolean;
}

export interface responseConvocatorias {
  data: intf_convocatoria[];
}

export interface intf_convocatoria {
  Id_Convocatoria:     string;
  Usuario_Creador:     string;
  Fecha_Creacion:      Date | string;
  Codigo_Convocatoria: string;
  Nombre_Convocatoria: string;
  Id_Responsable:      string;
  Fecha_Inicio:        Date;
  Fecha_Limite:        Date;
  Descripcion:         string;
  Poster_Convocatoria: string;
  MetadataUser?: Intf_user;
  img?: string;
}
/**
 * interfaz para usuarios
 */
export interface Users {
  data: Intf_user[];
}

export interface Intf_user {
  external_identifier:   null;
  email:                 string;
  auth_data:             null;
  email_notifications:   boolean;
  appearance:            null;
  language:              null | string;
  theme_dark:            null;
  theme_light:           null;
  theme_light_overrides: null;
  theme_dark_overrides:  null;
  id:                    string;
  first_name:            string;
  last_name:             string;
  password:              string;
  location:              null;
  title:                 null | string;
  description:           null;
  tags:                  null;
  avatar:                null;
  tfa_secret:            null;
  status:                string;
  role:                  string;
  token:                 null;
  last_access:           Date;
  last_page:             string;
  provider:              string;
}

