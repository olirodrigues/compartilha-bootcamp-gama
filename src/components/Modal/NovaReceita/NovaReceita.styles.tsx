import styled from "@emotion/styled";
import { DialogTitle } from "@mui/material";

export const Titulo = styled(DialogTitle)`
  width: 495px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 43px 36px 30px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 24px;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
    border-radius: 50%;
  }
`;

export const TwoColumn = styled.div`
  display: flex;
  gap: 30px;
`;
