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
import { getUser } from "../../usuario";
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
      id: despesa.idcarteira,
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

export const DespesasCompartilhadas = () => {
  // const dadosCard = [
  //   {
  //     title: "Despesas Patricia",
  //     pendentes: 450,
  //     pagas: 715,
  //     total: 1165,
  //   },
  //   {
  //     title: "Despesas Gabriel",
  //     pendentes: 450,
  //     pagas: 715,
  //     total: 1165,
  //   },
  //   {
  //     title: "Total de despesas",
  //     pendentes: 450,
  //     pagas: 715,
  //     total: 1165,
  //   },
  // ];

  const usuario = getUser();
  const [despesasCompartilhadas, setDespesasCompartilhadas] = useState<
    TransacaoView[]
  >([]);

  useEffect(() => {
    if (usuario) {
      Promise.all([
        getDespesas(usuario.idusuario),
        getCategorias(),
        getUsuarios(),
      ]).then(([respostaDespesas, respostaCategorias, usuarios]) => {
        setDespesasCompartilhadas(
          parseDespesasCompartilhadas(
            respostaDespesas,
            respostaCategorias,
            usuarios
          )
        );
      });
    }
  }, [usuario]);

  return (
    <Layout>
      <Cabecalho title='Despesas compartilhadas' name='OR' />
      <Styled.Container>
        <FilterTransacao />
        <FilterMes />
      </Styled.Container>
      {/* <CardSaldo dados={dadosCard} /> */}
      <TransactionsTable
        tableColumns={tableColumns}
        tableRows={despesasCompartilhadas}
      />
    </Layout>
  );
};
