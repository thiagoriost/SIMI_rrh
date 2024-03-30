import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { int_Login } from "../../share/interface/interfaces";

export interface int_store{
  login: int_Login;
  spinnerOn: boolean;
}


const initialState: int_store = {
  login:{
    data:{
      access_token:'',
      expires:0
    }
  },
  spinnerOn: false
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
    }


  }))
)
