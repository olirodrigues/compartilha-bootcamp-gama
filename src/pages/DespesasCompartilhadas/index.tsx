import { Grid } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";

import { Categoria, Despesa, Usuario } from "../../@types/api";
import { getDespesas } from "../../api/carteira";
import { getCategorias } from "../../api/categoria";
import { getUsuarios } from "../../api/usuario";
import { Cabecalho } from "../../components/Cabecalho";
import { FilterMes } from "../../components/FilterMes";
import { FilterTransacao } from "../../components/FilterTransacao";
import { Layout } from "../../components/Layout";
import {
  TransacaoView,
  TransactionsTable,
} from "../../components/TransactionsTable";
import { Status } from "../../components/TransactionsTable/Status";
import { CardResumo, CardResumoProps } from "./CardResumo";
import * as Styled from "./DespesasCompartilhadas.styles";

const tableColumns = [
  {
    field: "status",
    headerName: "Status",
    width: 135,
    renderCell: (params: GridRenderCellParams) => (
      <Status value={params.value} />
    ),
  },
  {
    field: "data",
    headerName: "Data",
    width: 123,
  },
  {
    field: "descricao",
    headerName: "Descrição",
    flex: 1,
  },
  {
    field: "responsavel",
    headerName: "Responsável",
    flex: 1,
  },
  {
    field: "categoria",
    headerName: "Categoria",
    width: 190,
  },
  {
    field: "valor",
    headerName: "Valor",
    width: 120,
    renderCell: (params: GridRenderCellParams) => <>R$ {params.value}</>,
  },
  {
    field: "options",
    headerName: "",
    width: 131,
    renderCell: (params: GridRenderCellParams) => (
      <Grid container justifyContent='end' width='80px'>
        <Grid item xs>
          <MdModeEdit size={18} />
        </Grid>
        <Grid item xs>
          <MdOutlineDeleteOutline size={18} />
        </Grid>
      </Grid>
    ),
  },
];

const parseDespesasCompartilhadas = (
  despesas: Despesa[],
  categorias: Categoria[],
  usuarios: Usuario[]
): TransacaoView[] =>
  despesas
    .filter((despesa) => despesa.compartilha === 1)
    .map((despesa) => ({
      id: despesa.idcarteira || 0,
      status: despesa.status,
      data: despesa.data,
      descricao: despesa.descricao,
      categoria:
        categorias.find(
          ({ idcategoria }) => despesa.categoria_idcategoria === idcategoria
        )?.descricao || "Não encontrada",
      valor: despesa.valor,
      responsavel:
        usuarios.find(
          (usuario) => despesa.idusuario_compartilha === usuario.idusuario
        )?.nome || "Não encontrado",
    }));

const parseResumoDespesas = (
  despesasPorUsuarios: { despesas: Despesa[]; usuario: Usuario }[]
) =>
  despesasPorUsuarios.map(({ usuario, despesas }) => ({
    title: `Despesas ${usuario.nome}`,
    pendentes: despesas
      .filter((despesa) => despesa.status === `0`)
      .reduce((valorTotal, despesa) => valorTotal + despesa.valor, 0),
    pagas: despesas
      .filter((despesa) => despesa.status === `1`)
      .reduce((valorTotal, despesa) => valorTotal + despesa.valor, 0),
    total: despesas.reduce(
      (valorTotal, despesa) => valorTotal + despesa.valor,
      0
    ),
  }));

export const DespesasCompartilhadas = () => {
  const [despesasCompartilhadas, setDespesasCompartilhadas] = useState<
    TransacaoView[]
  >([]);
  const [resumoDespesas, setResumoDespesas] = useState<CardResumoProps[]>([]);

  useEffect(() => {
    getUsuarios().then(async (usuarios) => {
      const respostaCategorias = await getCategorias();
      const respostaDespesasUsuarios = await Promise.all(
        usuarios.map(({ idusuario }) => getDespesas(idusuario))
      );
      const despesasDeTodosUsuarios = respostaDespesasUsuarios.flat();

      setDespesasCompartilhadas(
        parseDespesasCompartilhadas(
          despesasDeTodosUsuarios,
          respostaCategorias,
          usuarios
        )
      );

      const despesasPorUsuarios = usuarios.map((usuario, index) => ({
        usuario,
        despesas: respostaDespesasUsuarios[index],
      }));

      setResumoDespesas(parseResumoDespesas(despesasPorUsuarios));
    });
  }, []);

  return (
    <Layout>
      <Cabecalho title='Despesas compartilhadas' name='OR' />
      <Styled.Container>
        <FilterTransacao />
        <FilterMes />
      </Styled.Container>
      <Grid container spacing={2}>
        {resumoDespesas.map((resumo) => (
          <CardResumo {...resumo} key={resumo.title} />
        ))}
      </Grid>
      <TransactionsTable
        tableColumns={tableColumns}
        tableRows={despesasCompartilhadas}
      />
    </Layout>
  );
};
