import styled from "@emotion/styled";

export const ContainerFooter = styled.div`
  display: flex;
  color: #575454;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 46px 28px 74px;
  border-top: 1px solid #c4c4c4;
`;

export const ContainerIconeSocial = styled.ul`
  display: flex;
  gap: 15px;
`;

export const ItemListaSocial = styled.li`
  border: 1px solid ${({ theme }) => theme.palette.primary.dark};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  cursor: pointer;
`;
