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



const dataPruebaCollections = {
  "data": [
      {
          "collection": "Administracion",
          "meta": {
              "accountability": "all",
              "color": "#FFC23B",
              "item_duplication_fields": null,
              "sort": 1,
              "group": null,
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Administracion",
              "icon": "folder",
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": null
      },
      {
          "collection": "Convocatorias",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 1,
              "group": "Plan_Anual",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Convocatorias",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Convocatorias"
          }
      },
      {
          "collection": "Estados_Idea",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 3,
              "group": "Ideas_de_Investigacion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Estados_Idea",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Estados_Idea"
          }
      },
      {
          "collection": "Grupos_Investigacion",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 1,
              "group": "Administracion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Grupos_Investigacion",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Grupos_Investigacion"
          }
      },
      {
          "collection": "Grupos_Investigadores",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 2,
              "group": "Investigadores_RH",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Grupos_Investigadores",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Grupos_Investigadores"
          }
      },
      {
          "collection": "Ideas_Investigacion",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 1,
              "group": "Ideas_de_Investigacion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Ideas_Investigacion",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Ideas_Investigacion"
          }
      },
      {
          "collection": "Ideas_Lineas_Investigacion",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 2,
              "group": "Ideas_de_Investigacion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Ideas_Lineas_Investigacion",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Ideas_Lineas_Investigacion"
          }
      },
      {
          "collection": "Ideas_de_Investigacion",
          "meta": {
              "accountability": "all",
              "color": "#FFC23B",
              "item_duplication_fields": null,
              "sort": 3,
              "group": null,
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Ideas_de_Investigacion",
              "icon": "folder",
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": null
      },
      {
          "collection": "Investigadores_RH",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 3,
              "group": "Administracion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Investigadores_RH",
              "icon": "person_search",
              "note": "Investigadores que participan",
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": null
      },
      {
          "collection": "Motivos_Devolucion",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 4,
              "group": "Ideas_de_Investigacion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Motivos_Devolucion",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Motivos_Devolucion"
          }
      },
      {
          "collection": "Plan_Anual",
          "meta": {
              "accountability": "all",
              "color": "#FFC23B",
              "item_duplication_fields": null,
              "sort": 2,
              "group": null,
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Plan_Anual",
              "icon": "folder",
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": null
      },
      {
          "collection": "Tipo_Dominio",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 4,
              "group": "Administracion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Tipo_Dominio",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": false,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Tipo_Dominio"
          }
      },
      {
          "collection": "Valores_Dominio",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 5,
              "group": "Administracion",
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Valores_Dominio",
              "icon": null,
              "note": null,
              "display_template": null,
              "hidden": true,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Valores_Dominio"
          }
      },
      {
          "collection": "Valores_Dominio_translations",
          "meta": {
              "accountability": "all",
              "color": null,
              "item_duplication_fields": null,
              "sort": 5,
              "group": null,
              "collapse": "open",
              "preview_url": null,
              "versioning": 0,
              "collection": "Valores_Dominio_translations",
              "icon": "import_export",
              "note": null,
              "display_template": null,
              "hidden": true,
              "singleton": false,
              "translations": null,
              "archive_field": null,
              "archive_app_filter": true,
              "archive_value": null,
              "unarchive_value": null,
              "sort_field": null
          },
          "schema": {
              "name": "Valores_Dominio_translations"
          }
      },
      {
          "collection": "directus_activity",
          "meta": {
              "system": true,
              "collection": "directus_activity",
              "hidden": false,
              "singleton": false,
              "icon": null,
              "note": "$t:directus_collection.directus_activity",
              "translations": null,
              "display_template": null,
              "accountability": null
          },
          "schema": {
              "name": "directus_activity"
          }
      },
      {
          "collection": "directus_collections",
          "meta": {
              "system": true,
              "collection": "directus_collections",
              "hidden": false,
              "singleton": false,
              "icon": "list_alt",
              "note": "$t:directus_collection.directus_collections",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_collections"
          }
      },
      {
          "collection": "directus_fields",
          "meta": {
              "system": true,
              "collection": "directus_fields",
              "hidden": false,
              "singleton": false,
              "icon": "input",
              "note": "$t:directus_collection.directus_fields",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_fields"
          }
      },
      {
          "collection": "directus_files",
          "meta": {
              "system": true,
              "collection": "directus_files",
              "hidden": false,
              "singleton": false,
              "icon": "folder",
              "note": "$t:directus_collection.directus_files",
              "translations": null,
              "display_template": "{{ $thumbnail }} {{ title }}",
              "accountability": "all"
          },
          "schema": {
              "name": "directus_files"
          }
      },
      {
          "collection": "directus_folders",
          "meta": {
              "system": true,
              "collection": "directus_folders",
              "hidden": false,
              "singleton": false,
              "icon": null,
              "note": "$t:directus_collection.directus_folders",
              "translations": null,
              "display_template": "{{ name }}",
              "accountability": "all"
          },
          "schema": {
              "name": "directus_folders"
          }
      },
      {
          "collection": "directus_permissions",
          "meta": {
              "system": true,
              "collection": "directus_permissions",
              "hidden": false,
              "singleton": false,
              "icon": "admin_panel_settings",
              "note": "$t:directus_collection.directus_permissions",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_permissions"
          }
      },
      {
          "collection": "directus_presets",
          "meta": {
              "system": true,
              "collection": "directus_presets",
              "hidden": false,
              "singleton": false,
              "icon": "bookmark",
              "note": "$t:directus_collection.directus_presets",
              "translations": null,
              "display_template": null,
              "accountability": null
          },
          "schema": {
              "name": "directus_presets"
          }
      },
      {
          "collection": "directus_relations",
          "meta": {
              "system": true,
              "collection": "directus_relations",
              "hidden": false,
              "singleton": false,
              "icon": "merge_type",
              "note": "$t:directus_collection.directus_relations",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_relations"
          }
      },
      {
          "collection": "directus_roles",
          "meta": {
              "system": true,
              "collection": "directus_roles",
              "hidden": false,
              "singleton": false,
              "icon": "supervised_user_circle",
              "note": "$t:directus_collection.directus_roles",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_roles"
          }
      },
      {
          "collection": "directus_settings",
          "meta": {
              "system": true,
              "collection": "directus_settings",
              "hidden": false,
              "singleton": true,
              "icon": null,
              "note": "$t:directus_collection.directus_settings",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_settings"
          }
      },
      {
          "collection": "directus_users",
          "meta": {
              "system": true,
              "collection": "directus_users",
              "hidden": false,
              "singleton": false,
              "icon": "people_alt",
              "note": "$t:directus_collection.directus_users",
              "translations": null,
              "display_template": "{{ first_name }} {{ last_name }}",
              "accountability": "all",
              "archive_field": "status",
              "archive_value": "archived",
              "unarchive_value": "draft"
          },
          "schema": {
              "name": "directus_users"
          }
      },
      {
          "collection": "directus_dashboards",
          "meta": {
              "system": true,
              "collection": "directus_dashboards",
              "hidden": false,
              "singleton": false,
              "icon": null,
              "note": "$t:directus_collection.directus_dashboards",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_dashboards"
          }
      },
      {
          "collection": "directus_panels",
          "meta": {
              "system": true,
              "collection": "directus_panels",
              "hidden": false,
              "singleton": false,
              "icon": null,
              "note": "$t:directus_collection.directus_panels",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_panels"
          }
      },
      {
          "collection": "directus_notifications",
          "meta": {
              "system": true,
              "collection": "directus_notifications",
              "hidden": false,
              "singleton": false,
              "icon": null,
              "note": "$t:directus_collection.directus_notifications",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_notifications"
          }
      },
      {
          "collection": "directus_shares",
          "meta": {
              "system": true,
              "collection": "directus_shares",
              "hidden": false,
              "singleton": false,
              "icon": "share",
              "note": "$t:directus_collection.directus_shares",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_shares"
          }
      },
      {
          "collection": "directus_flows",
          "meta": {
              "system": true,
              "collection": "directus_flows",
              "hidden": false,
              "singleton": false,
              "icon": null,
              "note": "$t:directus_collection.directus_flows",
              "translations": null,
              "display_template": null,
              "accountability": "all"
          },
          "schema": {
              "name": "directus_flows"
          }
      }
  ]
}
