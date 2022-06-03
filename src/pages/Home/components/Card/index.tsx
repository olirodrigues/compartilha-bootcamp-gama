import { Typography } from "@mui/material";
import { ContainerCard, Text } from "./Card.style";

interface CardProps {
  img: string;
  title: string;
  text: string;
}

export function Card(props: CardProps) {
  return (
    <ContainerCard>
      <img src={props.img}></img>
      <Typography variant='h3'>{props.title}</Typography>
      <Typography variant='body1' align='center'>
        {props.text}
      </Typography>
    </ContainerCard>
  );
}
