import { Saldo } from "../@types/api";
import { buildURL } from "./config";

export const getSaldos = async (idUsuario: number): Promise<Saldo[]> =>
  fetch(buildURL(`/carteira/saldos/${idUsuario}`)).then((res) => res.json());
