import {
  MdOutlineTrendingUp,
  MdOutlineTrendingDown,
  MdOutlineAttachMoney,
  MdOutlineGroups,
} from "react-icons/md";
import { Cabecalho } from "../../components/Cabecalho";
import { CardSaldo } from "../../components/CardSaldo";
import { FilterMes } from "../../components/FilterMes";
import { Layout } from "../../components/Layout";

export const Dashboard = () => {
  const dadosCard = [
    {
      title: "Saldo atual",
      value: "0,00",
      icon: MdOutlineAttachMoney,
    },
    {
      title: "Receitas",
      value: "0,00",
      icon: MdOutlineTrendingUp,
    },
    {
      title: "Despesas",
      value: "0,00",
      icon: MdOutlineTrendingDown,
    },
    {
      title: "Despesas compartilhadas",
      value: "0,00",
      icon: MdOutlineGroups,
    },
  ];

  return (
    <Layout>
      <Cabecalho title='Dashboard' name='OR' />
      <FilterMes />
      <CardSaldo dados={dadosCard} />
    </Layout>
  );
};
