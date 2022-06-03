import imageHome1 from "../../../../assets/images/Home/imageHome1.svg";
import imageHome2 from "../../../../assets/images/Home/imageHome2.svg";
import imageHome3 from "../../../../assets/images/Home/imageHome3.svg";
import imageHome4 from "../../../../assets/images/Home/imageHome4.svg";

import * as Styled from "./MainContent.style";

import { Button, Typography } from "@mui/material";
import { Card } from "../Card";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

export function MainContent() {
  const CardInfo = [
    {
      img: imageHome2,
      title: "Controle suas finanças",
      text: "Tenha controle financeiro de maneira fácil e de onde estiver, o Compartilha chegou para te ajudar.",
    },
    {
      img: imageHome3,
      title: "Compartilhe com facilidade",
      text: "Aqui você pode compartilhar suas contas com segurança e praticidade.",
    },
    {
      img: imageHome4,
      title: "Sincronize suas contas",
      text: "Deixe tudo mais fácl com a sincronização de contas com o seu banco.",
    },
  ];

  return (
    <>
      <Styled.ContainerMain>
        <Styled.ContainerText>
          <Typography variant='h1' color='primary'>
            Serviços inteligentes para seu planejamento financeiro com contas compartilhadas.
          </Typography>
          <Typography variant='subtitle1' color='complementaryBlack'>
            Descomplicamos seu controle financeiro!
          </Typography>
          <Link to='/login'>
            <Button
              endIcon={
                <Styled.ContainerIconBotao>
                  <MdArrowForward />
                </Styled.ContainerIconBotao>
              }
              variant='contained'
              color='secondary'
            >
              Testar gratuitamente
            </Button>
          </Link>
        </Styled.ContainerText>
        <img src={imageHome1} />
      </Styled.ContainerMain>

      <Styled.ContainerSolucoes>
        <Typography variant='h2' color='primary'>
          Nossas soluções
        </Typography>
        <Styled.ContainerCards>
          {CardInfo.map((content, index) => {
            return (
              <Card img={content.img} title={content.title} text={content.text} key={index}></Card>
            );
          })}
        </Styled.ContainerCards>
      </Styled.ContainerSolucoes>
    </>
  );
}
