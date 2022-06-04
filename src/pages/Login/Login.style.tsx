import React from "react";
import styled from "@emotion/styled";

interface ContainerImagemProps {
  img: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "formulario imagem";
  height: 100%;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr;
    grid-template-areas: "formulario";
  }
`;

export const ContainerForm = styled.div`
  grid-area: formulario;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 366px;
  gap: 30px;
  margin: auto;

  img {
    width: 215px;
    margin-inline: auto;
  }
`;

export const LoginGoogle = styled.div`
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const ContainerImagem = styled.div<ContainerImagemProps>`
  grid-area: imagem;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-attachment: inherit;
`;
