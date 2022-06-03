import Image1 from "../../../../assets/images/Image1.svg";
import Image2 from "../../../../assets/images/Image2.svg";
import {
  ContainerCards,
  ContainerMain,
  ContainerSolucoes,
  ContainerText,
} from "./MainContent.style";
import { Button, Typography } from "@mui/material";
import { Card } from "../Card";

export function MainContent() {
  const CardInfo = [
    {
      img: Image2,
      title: "Lorem Ipsum",
      text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys",
    },
    {
      img: Image2,
      title: "Lorem Ipsum",
      text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys",
    },
    {
      img: Image2,
      title: "Lorem Ipsum",
      text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys",
    },
  ];

  return (
    <>
      <ContainerMain>
        <ContainerText>
          <Typography variant='h1'>
            Serviços inteligentes para seu planejamento financeiro com contas compartilhadas.
          </Typography>
          <Typography variant='subtitle1'>Descomplicamos seu controle financeiro!</Typography>
          <Button variant='contained'>Testar Gratuitamente</Button>
        </ContainerText>
        <img src={Image1}></img>
      </ContainerMain>
      <ContainerSolucoes>
        <Typography variant='h2'>Nossas soluções</Typography>
        <ContainerCards>
          {CardInfo.map((content, index) => {
            return (
              <Card img={content.img} title={content.title} text={content.text} key={index}></Card>
            );
          })}
        </ContainerCards>
      </ContainerSolucoes>
    </>
  );
}
