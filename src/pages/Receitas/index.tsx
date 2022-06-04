import { GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  MdModeEdit,
  MdOutlineCalculate,
  MdOutlineDeleteOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { RiHandCoinLine } from "react-icons/ri";
import { Grid } from "@mui/material";

import { getReceitas } from "../../api/carteira";
import { getCategorias } from "../../api/categoria";
import { Categoria, Receita } from "../../@types/api";
import { Cabecalho } from "../../components/Cabecalho";
import { CardSaldo, parseSaldos, SaldoDado } from "../../components/CardSaldo";
import { FilterMes } from "../../components/FilterMes";
import { FilterTransacao } from "../../components/FilterTransacao";
import { Layout } from "../../components/Layout";
import { NovaReceita } from "../../components/Modal/NovaReceita";
import {
  TransacaoView,
  TransactionsTable,
} from "../../components/TransactionsTable";
import { getUser } from "../../usuario";
import * as Styled from "./Receitas.styles";
import { Status } from "../../components/TransactionsTable/Status";

const iconeDespesas = {
  "Receitas recebidas": RiHandCoinLine,
  "Receitas pendentes": MdRemoveCircleOutline,
  Total: MdOutlineCalculate,
};

const saldosPadrao = parseSaldos(iconeDespesas, [
  {
    descricao: "Receitas recebidas",
    valor: 0,
  },
  {
    descricao: "Receitas pendentes",
    valor: 0,
  },
  {
    descricao: "Total",
    valor: 0,
  },
]);

const tableColumns = [
  {
    field: "status",
    headerName: "Status",
    width: 144,
    renderCell: (params: GridRenderCellParams) => (
      <Status value={params.value} />
    ),
  },
  {
    field: "data",
    headerName: "Data",
    width: 151,
  },
  {
    field: "descricao",
    headerName: "Descrição",
    flex: 1,
  },
  {
    field: "categoria",
    headerName: "Categoria",
    width: 157,
  },
  {
    field: "valor",
    headerName: "Valor",
    width: 120,
    renderCell: (params: GridRenderCellParams) => <>R$ {params.value}</>,
  },
  {
    field: "",
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

const parseReceitas = (
  receitas: Receita[],
  categorias: Categoria[]
): TransacaoView[] =>
  receitas.map((receita) => ({
    id: receita.idcarteira || 0,
    status: receita.status,
    data: receita.data,
    descricao: receita.descricao,
    categoria:
      categorias.find(
        ({ idcategoria }) => receita.categoria_idcategoria === idcategoria
      )?.descricao || "Não encontrada",
    valor: receita.valor,
  }));

export const Receitas = () => {
  const usuario = getUser();
  const [receitas, setReceitas] = useState<TransacaoView[]>([]);
  const [saldos, setSaldos] = useState<SaldoDado[]>(saldosPadrao);

  useEffect(() => {
    if (usuario) {
      Promise.all([getReceitas(usuario.idusuario), getCategorias()]).then(
        ([respostaReceitas, respostaCategorias]) => {
          setReceitas(parseReceitas(respostaReceitas, respostaCategorias));
          setSaldos(
            parseSaldos(iconeDespesas, [
              {
                descricao: "Receitas recebidas",
                valor: respostaReceitas
                  .filter((receita) => receita.status === `1`)
                  .reduce(
                    (valorPendente, receita) => valorPendente + receita.valor,
                    0
                  ),
              },
              {
                descricao: "Receitas pendentes",
                valor: respostaReceitas
                  .filter((receita) => receita.status === `0  `)
                  .reduce(
                    (valorPendente, receita) => valorPendente + receita.valor,
                    0
                  ),
              },
              {
                descricao: "Total",
                valor: respostaReceitas.reduce(
                  (valorPendente, receita) => valorPendente + receita.valor,
                  0
                ),
              },
            ])
          );
        }
      );
    }
  }, [usuario]);

  return (
    <Layout>
      <Cabecalho title='Receitas' name='OR' />
      <Styled.Container>
        <Styled.ContainerActions>
          <NovaReceita />
          <FilterTransacao />
        </Styled.ContainerActions>
        <FilterMes />
      </Styled.Container>
      <CardSaldo dados={saldos} />
      <TransactionsTable tableColumns={tableColumns} tableRows={receitas} />
    </Layout>
  );
};
