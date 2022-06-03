import { Box, Grid, Typography } from "@mui/material";
import { IconType } from "react-icons/lib";

interface CardSaldoProps {
  dados: {
    title: string;
    value: string;
    icon: IconType;
  }[];
}

export const CardSaldo = ({ dados }: CardSaldoProps) => {
  return (
    <Grid container spacing={2}>
      {dados.map((dados) => (
        <Grid item key={dados.title} xs>
          <Box px={2} py={3} bgcolor='grey.200' borderRadius={"10px"}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <div>
                <Typography variant='body1' color='textSecondary' gutterBottom>
                  {dados.title}
                </Typography>
                <Typography variant='subtitle3'>R$ {dados.value}</Typography>
              </div>
              <Box bgcolor='grey.300' height={40} width={40} p={1} borderRadius={5}>
                <dados.icon size={24} />
              </Box>
            </Grid>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
