import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Card } from "../../../components/Card";

const Dash = styled.div`
  height: 50%;
  margin-inline: 8px;
  border-bottom: 1px dashed ${({ theme }) => theme.palette.complementaryBlack.main};
`;

const Registro = ({
  titulo,
  valor,
  mb,
  mt,
}: {
  titulo: string;
  valor: number;
  mb?: number;
  mt?: number;
}) => (
  <Grid container marginBottom={mb} marginTop={mt}>
    <Grid item>
      <Typography variant='bold' color='complementaryBlack.main'>
        {titulo}
      </Typography>
    </Grid>
    <Grid item xs>
      <Dash />
    </Grid>
    <Grid item>
      <Typography>R$ {valor}</Typography>
    </Grid>
  </Grid>
);

export const ContasECartoes = () => (
  <Card>
    <Typography variant='subtitle3' color='primary' gutterBottom>
      Contas e cartões sincronizados
    </Typography>

    <Registro titulo='Saldo das contas' valor={100} mb={3} mt={3.5} />
    <Registro titulo='Fatura dos cartões' valor={100} mb={1.5} />
    <Registro titulo='Total' valor={100} mb={3.5} />

    <Typography variant='bold' color='complementaryBlack.main'>
      Cartões sincronizados
    </Typography>

    <Box mt={2}>
      <Grid container spacing={1} marginTop={2}>
        {["Nubank", "Inter", "Picpay"].map((cartao) => (
          <Grid item>
            <Typography variant='bold' color='primary'>
              {cartao}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Button variant='contained' color='complementaryBlue'>
      Sincronizar contas e cartões
    </Button>
  </Card>
);
