import { Button } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import {
  MdOutlineGroups,
  MdOutlineCalculate,
  MdRemoveCircleOutline,
  MdPriceCheck,
  MdModeEdit,
  MdOutlineDeleteOutline,
  MdAdd,
} from "react-icons/md";
import { Cabecalho } from "../../components/Cabecalho";
import { CardSaldo } from "../../components/CardSaldo";
import { FilterMes } from "../../components/FilterMes";
import { FilterTransacao } from "../../components/FilterTransacao";
import { Layout } from "../../components/Layout";
import { NovaDespesa } from "../../components/Modal/NovaDespesa";
import { TransactionsTable } from "../../components/TransactionsTable";
import * as Styled from "./Despesas.styles";

export function Despesas() {
  const dadosCard = [
    {
      title: "Despesas pendentes",
      value: "0,00",
      icon: MdRemoveCircleOutline,
    },
    {
      title: "Despesas pagas",
      value: "0,00",
      icon: MdPriceCheck,
    },
    {
      title: "Despesas compartilhadas",
      value: "0,00",
      icon: MdOutlineGroups,
    },
    {
      title: "Total",
      value: "0,00",
      icon: MdOutlineCalculate,
    },
  ];

  const tableColumns = [
    {
      field: "status",
      headerName: "Status",
      width: 144,
    },
    {
      field: "data",
      headerName: "Data",
      width: 151,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      width: 204,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      width: 157,
    },
    {
      field: "valor",
      headerName: "Valor",
      width: 153,
    },

    {
      field: "",
      headerName: "",
      width: 131,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <MdModeEdit size={18} />
          <MdOutlineDeleteOutline size={18} />
        </>
      ),
    },
  ];

  const tableRows = [
    {
      id: "1",
      status: "Paga",
      data: "22/05/2020",
      descricao: "1 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "2",
      status: "Paga",
      data: "22/05/2020",
      descricao: "2 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "3",
      status: "Paga",
      data: "22/05/2020",
      descricao: "3 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "4",
      status: "Paga",
      data: "22/05/2020",
      descricao: "4 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "5",
      status: "Paga",
      data: "22/05/2020",
      descricao: "5 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "6",
      status: "Paga",
      data: "22/05/2020",
      descricao: "6 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "7",
      status: "Paga",
      data: "22/05/2020",
      descricao: "7 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "8",
      status: "Paga",
      data: "22/05/2020",
      descricao: "8 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "9",
      status: "Paga",
      data: "22/05/2020",
      descricao: "9 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "10",
      status: "Paga",
      data: "22/05/2020",
      descricao: "10 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "11",
      status: "Paga",
      data: "22/05/2020",
      descricao: "11 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "12",
      status: "Paga",
      data: "22/05/2020",
      descricao: "12 Gasto do dia",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "13",
      status: "Pendente",
      data: "22/05/2020",
      descricao: "Gasto do noite",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
  ];

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
      <CardSaldo dados={dadosCard} />
      <TransactionsTable tableColumns={tableColumns} tableRows={tableRows} />
    </Layout>
  );
}
