import styled from "@emotion/styled";
import { Button as ButtonMUI } from "@mui/material";

export const ContainerHeader = styled.div`
  margin: 37px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 134px;
  }
`;

export const Button = styled(ButtonMUI)`
  border-radius: 24px;
`;
