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
  | "Despesas compartilhadas";

export interface Saldo {
  descricao: TipoSaldo;
  valor: number;
}
