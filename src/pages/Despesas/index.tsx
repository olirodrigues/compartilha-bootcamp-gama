import { Grid } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  MdOutlineGroups,
  MdOutlineCalculate,
  MdRemoveCircleOutline,
  MdPriceCheck,
  MdModeEdit,
  MdOutlineDeleteOutline,
  MdGroup,
} from "react-icons/md";
import { Categoria, Despesa } from "../../@types/api";
import { getDespesas } from "../../api/carteira";
import { getCategorias } from "../../api/categoria";

import { Cabecalho } from "../../components/Cabecalho";
import { CardSaldo, parseSaldos, SaldoDado } from "../../components/CardSaldo";
import { FilterMes } from "../../components/FilterMes";
import { FilterTransacao } from "../../components/FilterTransacao";
import { Layout } from "../../components/Layout";
import { NovaDespesa } from "../../components/Modal/NovaDespesa";
import {
  TransacaoView,
  TransactionsTable,
} from "../../components/TransactionsTable";
import { Status } from "../../components/TransactionsTable/Status";
import { getUser } from "../../usuario";
import * as Styled from "./Despesas.styles";

const iconeDespesas = {
  "Despesas pendentes": MdRemoveCircleOutline,
  "Despesas pagas": MdPriceCheck,
  "Despesas compartilhadas": MdOutlineGroups,
  Total: MdOutlineCalculate,
};

const saldosPadrao = parseSaldos(iconeDespesas, [
  {
    descricao: "Despesas pendentes",
    valor: 0,
  },
  {
    descricao: "Despesas pagas",
    valor: 0,
  },
  {
    descricao: "Despesas compartilhadas",
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
    width: 170,
    renderCell: (params: GridRenderCellParams) => (
      <Grid container spacing={3} justifyContent='end' width='135px'>
        {params.row.compartilha === 1 && (
          <Grid item color='secondary.main'>
            <MdGroup size={18} />
          </Grid>
        )}
        <Grid item>
          <MdModeEdit size={18} />
        </Grid>
        <Grid item>
          <MdOutlineDeleteOutline size={18} />
        </Grid>
      </Grid>
    ),
  },
];

const parseDespesas = (
  despesas: Despesa[],
  categorias: Categoria[]
): TransacaoView[] =>
  despesas.map((despesa) => ({
    id: despesa.idcarteira || 0,
    status: despesa.status,
    data: despesa.data,
    descricao: despesa.descricao,
    categoria:
      categorias.find(
        ({ idcategoria }) => despesa.categoria_idcategoria === idcategoria
      )?.descricao || "Não encontrada",
    valor: despesa.valor,
    compartilha: despesa.compartilha,
  }));

export function Despesas() {
  const usuario = getUser();
  const [despesas, setDespesas] = useState<TransacaoView[]>([]);
  const [saldos, setSaldos] = useState<SaldoDado[]>(saldosPadrao);

  useEffect(() => {
    if (usuario) {
      Promise.all([getDespesas(usuario.idusuario), getCategorias()]).then(
        ([respostaDespesas, respostaCategorias]) => {
          setDespesas(parseDespesas(respostaDespesas, respostaCategorias));
          setSaldos(
            parseSaldos(iconeDespesas, [
              {
                descricao: "Despesas pendentes",
                valor: respostaDespesas
                  .filter((despesa) => despesa.status === `0`)
                  .reduce(
                    (valorPendente, despesa) => valorPendente + despesa.valor,
                    0
                  ),
              },
              {
                descricao: "Despesas pagas",
                valor: respostaDespesas
                  .filter((despesa) => despesa.status === `1`)
                  .reduce(
                    (valorPendente, despesa) => valorPendente + despesa.valor,
                    0
                  ),
              },
              {
                descricao: "Despesas compartilhadas",
                valor: respostaDespesas
                  .filter((despesa) => despesa.compartilha === 1)
                  .reduce(
                    (valorPendente, despesa) => valorPendente + despesa.valor,
                    0
                  ),
              },
              {
                descricao: "Total",
                valor: respostaDespesas.reduce(
                  (valorPendente, despesa) => valorPendente + despesa.valor,
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
      <Cabecalho title='Despesas' name='OR' />
      <Styled.Container>
        <Styled.ContainerActions>
          <NovaDespesa />
          <FilterTransacao />
        </Styled.ContainerActions>
        <FilterMes />
      </Styled.Container>
      <CardSaldo dados={saldos} />
      <TransactionsTable tableColumns={tableColumns} tableRows={despesas} />
    </Layout>
  );
}
