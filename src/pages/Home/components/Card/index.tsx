import { Typography } from "@mui/material";
import * as Styled from "./Card.style";

interface CardProps {
  img: string;
  title: string;
  text: string;
}

export function Card(props: CardProps) {
  return (
    <Styled.ContainerCard>
      <img src={props.img}></img>
      <Typography variant='h3' color='primary' align='center'>
        {props.title}
      </Typography>
      <Typography variant='body1' color='complementaryBlack' align='center'>
        {props.text}
      </Typography>
    </Styled.ContainerCard>
  );
}
