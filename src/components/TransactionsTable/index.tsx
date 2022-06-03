import { GridColDef } from "@mui/x-data-grid";
import * as Styled from "./TransactionsTable.style";

interface TransactionsTableProps {
  tableColumns: GridColDef[];
  tableRows: {
    id: string;
    status: string;
    data: string;
    descricao: string;
    categoria: string;
    valor: number;
  }[];
}

export function TransactionsTable({ tableColumns, tableRows }: TransactionsTableProps) {
  return (
    <Styled.ContainerTable>
      <Styled.StyledDataGrid
        autoHeight
        rows={tableRows}
        columns={tableColumns}
        editMode='row'
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
      />
    </Styled.ContainerTable>
  );
}
