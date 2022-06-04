import { GridRenderCellParams } from "@mui/x-data-grid";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Cabecalho } from "../../components/Cabecalho";
import { CardSaldo } from "../../components/CardSaldo";
import { FilterMes } from "../../components/FilterMes";
import { FilterTransacao } from "../../components/FilterTransacao";
import { Layout } from "../../components/Layout";
import { TransactionsTable } from "../../components/TransactionsTable";
import * as Styled from "./DespesasCompartilhadas.styles";

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

  const tableColumns = [
    {
      field: "status",
      headerName: "Status",
      width: 135,
    },
    {
      field: "data",
      headerName: "Data",
      width: 123,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      width: 165,
    },
    {
      field: "responsavel",
      headerName: "Responsável",
      width: 151,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      width: 190,
    },
    {
      field: "valor",
      headerName: "Valor",
      width: 116,
    },

    {
      field: "",
      headerName: "",
      width: 60,
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
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "2",
      status: "Paga",
      data: "22/05/2020",
      descricao: "2 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "3",
      status: "Paga",
      data: "22/05/2020",
      descricao: "3 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "4",
      status: "Paga",
      data: "22/05/2020",
      descricao: "4 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "5",
      status: "Paga",
      data: "22/05/2020",
      descricao: "5 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "6",
      status: "Paga",
      data: "22/05/2020",
      descricao: "6 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "7",
      status: "Paga",
      data: "22/05/2020",
      descricao: "7 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "8",
      status: "Paga",
      data: "22/05/2020",
      descricao: "8 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "9",
      status: "Paga",
      data: "22/05/2020",
      descricao: "9 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "10",
      status: "Paga",
      data: "22/05/2020",
      descricao: "10 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "11",
      status: "Paga",
      data: "22/05/2020",
      descricao: "11 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "12",
      status: "Paga",
      data: "22/05/2020",
      descricao: "12 Gasto do dia",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
    {
      id: "13",
      status: "Pendente",
      data: "22/05/2020",
      descricao: "Gasto do noite",
      responsavel: "Patricia Santos",
      categoria: "Lazer",
      valor: 22.3,
      teste: "asa",
    },
  ];

  return (
    <Layout>
      <Cabecalho title='Despesas' name='OR' />
      <Styled.Container>
        <FilterTransacao />
        <FilterMes />
      </Styled.Container>
      {/* <CardSaldo dados={dadosCard} /> */}
      <TransactionsTable tableColumns={tableColumns} tableRows={tableRows} />
    </Layout>
  );
};
