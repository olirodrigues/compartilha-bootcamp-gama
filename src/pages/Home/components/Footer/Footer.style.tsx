import styled from "@emotion/styled";

export const ContainerFooter = styled.div`
  display: flex;
  color: #575454;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 46px 28px 74px;
  border-top: 1px solid #c4c4c4;

  img {
    width: 211px;
  }
`;

export const ContainerIconeSocial = styled.ul`
  display: flex;
  gap: 15px;
`;

export const ItemListaSocial = styled.li`
  border: 1px solid black;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  .homeSocialIcons {
    height: 15px;
    width: 15px;
  }
`;
