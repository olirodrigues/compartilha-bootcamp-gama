import { Box, Grid, Typography } from "@mui/material";
import { IconType } from "react-icons/lib";

import { TipoSaldo, Saldo } from "../../@types/api";
import { Card } from "../Card";

export const parseSaldos = (
  mapaTipoSaldoParaIcone: {
    [K in TipoSaldo]?: IconType;
  },
  saldos: Saldo[]
): Pick<SaldoDado, "title" | "value" | "icon">[] =>
  saldos.map((saldo) => ({
    title: saldo.descricao,
    value: saldo.valor,
    icon: mapaTipoSaldoParaIcone[saldo.descricao],
  }));

export interface SaldoDado {
  title: TipoSaldo;
  value?: number;
  icon?: IconType;
  pendentes?: number;
  pagas?: number;
  total?: number;
}

interface CardSaldoProps {
  dados: SaldoDado[];
}

export const CardSaldo = ({ dados }: CardSaldoProps) => {
  return (
    <Grid container spacing={2}>
      {dados.map((dados) => (
        <Grid item key={dados.title} xs>
          <Card>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <div>
                <Typography variant='body1' color='textSecondary' gutterBottom>
                  {dados.title}
                </Typography>
                <Typography variant='subtitle3'>R$ {dados.value}</Typography>
              </div>
              {dados.icon && (
                <Box
                  bgcolor='secondary.main'
                  height={40}
                  width={40}
                  p={1}
                  borderRadius={5}
                >
                  <dados.icon color='white' size={24} />
                </Box>
              )}
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
