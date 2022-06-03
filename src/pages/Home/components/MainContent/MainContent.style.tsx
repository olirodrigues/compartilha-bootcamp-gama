import styled from "@emotion/styled";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  gap: 88px;
  align-items: center;
  margin-bottom: 159px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  margin-inline: 15px;
  max-width: 610px;

  button {
    text-transform: capitalize;
  }
`;

export const ContainerIconBotao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ContainerSolucoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 101px;
  align-items: center;
  margin-inline: auto;
  margin-bottom: 119px;
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 45px;
`;
