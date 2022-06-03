import styled from "@emotion/styled";
import { styled as styledMUI } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const ContainerTable = styled.div`
  margin-inline: auto;
  max-width: 1250px;
  min-width: 1000px;
`;

export const StyledDataGrid = styledMUI(DataGrid)(() => ({
  borderRadius: "40px",
  paddingBottom: "10px",

  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader--moving": {
    backgroundColor: "transparent",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#FBF9F3",
    borderRadius: "40px 40px 0 0",
    paddingInline: "30px",
  },
  "& .MuiDataGrid-row": {
    paddingInline: "30px",
  },
}));
