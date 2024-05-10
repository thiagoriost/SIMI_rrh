import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { intf_convocatoria } from "../../share/interface/interfaces";
import { DataUsuario } from "../services/db_interfaces/Usuario";
import { dataIdeaSeleccionada } from "../services/db_interfaces/Ideas_Investigacion";
import { constantesNewIdea } from "@app/share/utils/constas";


export const dataInt_UsuarioCreador = {
  theme_light_overrides: '',
  theme_dark_overrides:  '',
  id:                    '',
  first_name:            '',
  last_name:             '',
  password:              '',
  location:              '',
  title:                 '',
  description:           '',
  tags:                  '',
  avatar:                '',
  tfa_secret:            '',
  status:                '',
  role:                  '',
  token:                 '',
  last_access:           '',
  last_page:             '',
  theme_light:           '',
  provider:              '',
  external_identifier:   '',
  email:                 '',
  auth_data:             '',
  appearance:            '',
  email_notifications:   false,
  theme_dark:            '',
  language:              '',
}

/**
 * Objeto para resetear el formulario ideas
 */
export const initDataIdeaSeleccionada: dataIdeaSeleccionada = {
  Antecedentes: '',
  Apropiacion_Conocimiento: '',
  Bibliografia_Empleada: '',
  Codigo_Idea: '',
  Desarrollo_Tecnologico: '',
  Descripcion_Idea: '',
  Entidad: '',
  estados: [],
  Fecha_Creacion: '',
  Fecha_Idea: '',
  Fecha_Validacion: '',
  Formacion_CTEL: '',
  Id_Convocatoria: '',
  Id_Dependencia_IGAC: '',
  Id_Idea_Investigacion: '',
  Id_Macroproyecto: '',
  Id_Ponente: '',
  Innovacion: '',
  Investigacion_Cientifica: '',
  Justificacion: '',
  lineas_investigacion: [],
  Lugar_Ejecucion: '',
  Nuevo_Conocimiento: '',
  Problema_Idea: '',
  Tecnologico_Innovacion: '',
  Tiempo_Ejecucion_Proyecto: '',
  Titulo_Idea: '',
  URL_Cronograma: '',
  Usuario_Creador: dataInt_UsuarioCreador,
  Validada: '',
  nombreProponente: '',
  email: '',
}

/**
 * Objeto para inicializar convocatoria
 */
export const initConvocatoriaSelected: intf_convocatoria = {
  Id_Convocatoria: "",
  Usuario_Creador: "",
  Fecha_Creacion: new Date,
  Codigo_Convocatoria: "",
  Nombre_Convocatoria: "",
  Id_Responsable: "",
  Fecha_Inicio: new Date,
  Fecha_Limite: new Date,
  Descripcion: "",
  Poster_Convocatoria: ""
}

/**
 * Objeto para inicializar el store
 */
const initialState: int_store = {
  usuario:{
    theme_light_overrides:'',
    theme_dark_overrides:'',
    id:'',
    first_name:'',
    last_name:'',
    password:'',
    location:'',
    title:'',
    description:'',
    tags:'',
    avatar:'',
    tfa_secret:'',
    status:'',
    role:'',
    token:'',
    last_access:'',
    last_page:'',
    theme_light:'',
    provider:'',
    external_identifier:'',
    email:'',
    auth_data:'',
    appearance:'',
    email_notifications:false,
    theme_dark:'',
    language:'',

  },
  spinnerOn: false,
  convocatoriaSelected:initConvocatoriaSelected,
  ideaSeleccionanda: initDataIdeaSeleccionada,
  tipoVistaFormularioIdeaInvestigacion: constantesNewIdea.modoVistaFormularioIdeaInvestigacion.modo_nueva_idea
}

/**
 * Interfas store
 */
export interface int_store{
  usuario: DataUsuario;
  spinnerOn: boolean;
  convocatoriaSelected: intf_convocatoria;
  ideaSeleccionanda: dataIdeaSeleccionada;
  tipoVistaFormularioIdeaInvestigacion: string
}




export const StoreApp = signalStore(
  {providedIn:'root'},
  withState(initialState),
  // withMethods(({usuario, ...store})=>({
  withMethods(({...store})=>({

    updateLogin(log:DataUsuario){
      patchState(store, {usuario:log})
    },

    changeSpinner(change:boolean){
      patchState(store, {spinnerOn:change})
    },

    setConvocatoriaSelected(convSel: intf_convocatoria){
      patchState(store, {convocatoriaSelected:convSel})
    },

    setIdeaSeleccionanda(ideaSeleccionanda: dataIdeaSeleccionada){
      patchState(store, {ideaSeleccionanda})
    },

    set_tipoVistaFormularioIdeaInvestigacion(tipoVistaFormularioIdeaInvestigacion: string){
      patchState(store, {tipoVistaFormularioIdeaInvestigacion});
    }


  }))
)
