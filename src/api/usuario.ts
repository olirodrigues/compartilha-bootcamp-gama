import { Usuario } from "../@types/api";
import { buildURL } from "./config";

export const getUsuario = async (id: number): Promise<Usuario | undefined> =>
  fetch(buildURL(`/usuario`))
    .then((res) => res.json() as unknown as Usuario[])
    // A API retorna um array com os usuarios. Temporariamente, estamos pegando o usuario
    // que o Id seja igual o passado.
    .then((usuarios) => usuarios.find((u) => u.idusuario === id));
