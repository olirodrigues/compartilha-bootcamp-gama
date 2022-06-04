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

export interface Transacao {
  idcarteira: number;
  descricao: string;
  valor: number;
  data: string;
  tipo: "despesa" | "receita";
  categoria_idcategoria: number;
  compartilha: number;
  idusuario: number;
  status: string;
  idusuario_compartilha: number;
}

export interface Despesa extends Transacao {
  tipo: "despesa";
}

export interface Categoria {
  idcategoria: number;
  descricao: string;
}
