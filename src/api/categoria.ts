import { Categoria } from "../@types/api";
import { buildURL } from "./config";

export const getCategorias = async (): Promise<Categoria[]> =>
  fetch(buildURL(`/categoria`)).then((res) => res.json());
