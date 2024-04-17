export interface ValoresDominio {
  data: DatumValoresDominio[];
}

export interface DatumValoresDominio {
  Id_Valores_Dominio: string;
  Tipo_Dominio:       TipoDominio;
  Valor_Dominio:      string;
  Descripcion_Valor:  string;
  Id_Valor_Dom_Padre: null;
}

export enum TipoDominio {
  Dependigac = "DEPENDIGAC",
}
