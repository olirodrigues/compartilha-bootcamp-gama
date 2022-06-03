import { Avatar, Typography } from "@mui/material";
import { Container } from "./Cabecalho.style";

interface CabecalhoProps {
  title: string;
  name: string;
}

export const Cabecalho = ({ title, name }: CabecalhoProps) => {
  return (
    <Container>
      <Typography variant='h4' component='h1'>
        {title}
      </Typography>
      <Avatar>{name}</Avatar>
    </Container>
  );
};
