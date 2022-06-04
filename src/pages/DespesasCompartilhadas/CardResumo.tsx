import { Box, Grid, Typography } from "@mui/material";
import {
  MdOutlineCalculate,
  MdOutlineCheckCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { Card } from "../../components/Card";

export interface CardResumoProps {
  title: string;
  pendentes?: number;
  pagas?: number;
  total?: number;
}

export const CardResumo = (props: CardResumoProps) => {
  return (
    <Grid item key={props.title} xs>
      <Card>
        <div>
          <Typography variant='subtitle3' gutterBottom>
            {props.title}
          </Typography>
        </div>
        <Typography color='textSecondary'>
          <Grid container marginTop='27px'>
            <Grid item xs>
              <Box
                color='error.main'
                display='inline-flex'
                justifyContent='center'
              >
                <MdRemoveCircleOutline size={21} />
                &nbsp; Pendentes
              </Box>
            </Grid>
            <Grid item>R$ {props.pendentes}</Grid>
          </Grid>
          <Grid container marginTop='12px'>
            <Grid item xs>
              <Box
                color='success.main'
                display='inline-flex'
                justifyContent='center'
              >
                <MdOutlineCheckCircleOutline size={21} />
                &nbsp; Pagas
              </Box>
            </Grid>
            <Grid item>R$ {props.pagas}</Grid>
          </Grid>
          <Grid container marginTop='12px'>
            <Grid item xs>
              <Box display='inline-flex' justifyContent='center'>
                <MdOutlineCalculate size={21} />
                &nbsp; Total
              </Box>
            </Grid>
            <Grid item>R$ {props.total}</Grid>
          </Grid>
        </Typography>
      </Card>
    </Grid>
  );
};
