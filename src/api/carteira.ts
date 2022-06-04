import { Despesa, Receita, Saldo } from "../@types/api";
import { buildURL } from "./config";

export const getSaldos = async (idUsuario: number): Promise<Saldo[]> =>
  fetch(buildURL(`/carteira/saldos/${idUsuario}`)).then((res) => res.json());

export const getDespesas = async (idUsuario: number): Promise<Despesa[]> =>
  fetch(buildURL(`/carteira/totaldespesa/${idUsuario}`)).then((res) =>
    res.json()
  );

export const getReceitas = async (idUsuario: number): Promise<Receita[]> =>
  fetch(buildURL(`/carteira/totalreceita/${idUsuario}`)).then((res) =>
    res.json()
  );
