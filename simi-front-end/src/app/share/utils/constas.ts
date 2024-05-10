export const urlImg = 'http://172.19.3.143:8055/assets/';

export const constantesApp = {
  DEPENDIGAC: 'DEPENDIGAC',
  Valores_Dominio: 'Valores_Dominio'
}

export const constantesNewIdea = {
  Interna: 'Interna',
  Externa: 'Externa',
  Estados:{
    campo:"Descripcion_Valor_Estado",
    Estados:{
      Devuelta:'Devuelta'
    }
  },
  DB:{
    Ideas_Investigacion:'Ideas_Investigacion',
    Motivos_Devolucion:'Motivos_Devolucion'
  },
  modoVistaFormularioIdeaInvestigacion:{
    modo_nueva_idea:'modo_nueva_idea',
    modo_ver:'modo_solo_ver',
    modo_devolucion:'modo_devolucion'

  }

}

export interface modoVistaFormularioIdeaInvestigacion{
  modo_nueva_idea: string;
  modo_ver: string;
  modo_devolucion: string;
}
