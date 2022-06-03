import { Box, Grid, Paper, Typography } from "@mui/material";
import { IconType } from "react-icons/lib";
import { Card } from "../Card";

interface CardSaldoProps {
  dados: {
    title: string;
    value?: string;
    icon?: IconType;
    pendentes?: number;
    pagas?: number;
    total?: number;
  }[];
}

export const CardSaldo = ({ dados }: CardSaldoProps) => {
  return (
    <Grid container spacing={2}>
      {dados.map((dados) => (
        <Grid item key={dados.title} xs>
          <Card>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <div>
                <Typography variant='body1' color='textSecondary' gutterBottom>
                  {dados.title}
                </Typography>
                <Typography variant='subtitle3'>R$ {dados.value}</Typography>
              </div>
              {dados.icon && (
                <Box bgcolor='secondary.main' height={40} width={40} p={1} borderRadius={5}>
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
