import { Grid } from "@mui/material";
import {
  MdOutlineTrendingUp,
  MdOutlineTrendingDown,
  MdOutlineAttachMoney,
  MdOutlineGroups,
} from "react-icons/md";
import { useEffect, useState } from "react";

import { Cabecalho } from "../../components/Cabecalho";
import { CardSaldo, parseSaldos, SaldoDado } from "../../components/CardSaldo";
import { FilterMes } from "../../components/FilterMes";
import { Layout } from "../../components/Layout";
import { DespesasCompartilhadas } from "./DespesasCompartilhadas";
import { ContasECartoes } from "./ContasECartoes";
import { DespesasPorCategoria } from "./DespesasPorCategoria";
import { getSaldos } from "../../api/carteira";
import { getUser } from "../../usuario";

const iconeSaldos = {
  "Saldo atual": MdOutlineAttachMoney,
  Receitas: MdOutlineTrendingUp,
  Despesas: MdOutlineTrendingDown,
  "Despesas compartilhadas": MdOutlineGroups,
};

const saldosPadrao = parseSaldos(iconeSaldos, [
  {
    descricao: "Saldo atual",
    valor: 0,
  },
  {
    descricao: "Receitas",
    valor: 0,
  },
  {
    descricao: "Despesas",
    valor: 0,
  },
  {
    descricao: "Despesas compartilhadas",
    valor: 0,
  },
]);

export const Dashboard = () => {
  const [saldos, setSaldos] = useState<SaldoDado[]>(saldosPadrao);
  const user = getUser();

  useEffect(() => {
    if (user) {
      getSaldos(user?.idusuario).then((resposta) => {
        setSaldos(parseSaldos(iconeSaldos, resposta));
      });
    }
  }, [user]);

  return (
    <Layout>
      <Cabecalho title='Dashboard' name='OR' />
      <FilterMes />
      <CardSaldo dados={saldos} />
      <Grid container spacing={2}>
        <Grid item xs>
          <ContasECartoes />
        </Grid>
        <Grid item xs>
          <DespesasCompartilhadas />
        </Grid>
        <Grid item xs>
          <DespesasPorCategoria />
        </Grid>
      </Grid>
    </Layout>
  );
};
