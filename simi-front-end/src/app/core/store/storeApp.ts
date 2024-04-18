import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Ideas_Investigacion, int_Login, intf_convocatoria } from "../../share/interface/interfaces";
import { DataUsuario, Usuario } from "../services/db_interfaces/Usuario";
import { initDataIdeaSeleccionada } from "../../modules/ideas/components/list-ideas/list-ideas.component";

export interface int_store{
  usuario: DataUsuario;
  spinnerOn: boolean;
  convocatoriaSelected: intf_convocatoria;
  ideaSeleccionanda: Ideas_Investigacion;
}


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
  convocatoriaSelected:{
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
  },
  ideaSeleccionanda: initDataIdeaSeleccionada
}

export const StoreApp = signalStore(
  {providedIn:'root'},
  withState(initialState),
  withMethods(({usuario, ...store})=>({

    updateLogin(log:DataUsuario){
      // const updateLogin = {...usuario(), log}
      patchState(store, {usuario:log})
    },

    changeSpinner(change:boolean){
      patchState(store, {spinnerOn:change})
    },

    setConvocatoriaSelected(convSel: intf_convocatoria){
      patchState(store, {convocatoriaSelected:convSel})
    },

    setIdeaSeleccionanda(ideaSeleccionanda: Ideas_Investigacion){
      patchState(store, {ideaSeleccionanda})
    }


  }))
)
