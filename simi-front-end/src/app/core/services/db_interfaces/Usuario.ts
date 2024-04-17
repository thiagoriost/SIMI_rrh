export interface Usuario {
  data: DataUsuario;
}

export interface DataUsuario {
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
