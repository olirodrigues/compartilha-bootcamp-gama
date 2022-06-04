export interface Usuario {
  idusuario: number;
  nome: string;
  email: string;
  senha: string;
}

export type TipoSaldo =
  | "Saldo atual"
  | "Receitas"
  | "Despesas"
  | "Despesas compartilhadas"
  | "Despesas pendentes"
  | "Despesas pagas"
  | "Receitas recebidas"
  | "Receitas pendentes"
  | "Total";

export interface Saldo {
  descricao: TipoSaldo;
  valor: number;
}
