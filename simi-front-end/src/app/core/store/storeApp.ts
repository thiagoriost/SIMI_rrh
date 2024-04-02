import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { int_Login, intf_convocatoria } from "../../share/interface/interfaces";

export interface int_store{
  login: int_Login;
  spinnerOn: boolean;
  convocatoriaSelected: intf_convocatoria;
}


const initialState: int_store = {
  login:{
    data:{
      access_token:'',
      expires:0
    }
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
  }
}

export const StoreApp = signalStore(
  {providedIn:'root'},
  withState(initialState),
  withMethods(({login, ...store})=>({

    updateLogin(log:int_Login){
      // const updateLogin = {...login(), log}
      patchState(store, {login:log})
    },

    changeSpinner(change:boolean){
      patchState(store, {spinnerOn:change})
    },

    setConvocatoriaSelected(convSel: intf_convocatoria){
      patchState(store, {convocatoriaSelected:convSel})
    }


  }))
)
