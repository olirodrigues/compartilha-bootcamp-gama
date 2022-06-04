import Usuario1 from "../../../assets/images/Usuarios/Usuario1.png";
import Usuario2 from "../../../assets/images/Usuarios/Usuario2.png";

import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "../../../components/Card";

const UsuarioCompartilhado = ({
  src,
  name,
  valor,
}: {
  src: string;
  name: string;
  valor: string;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <Avatar src={src} />
        <Box>
          <Typography variant='body1' sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant='body1'>Total</Typography>
        </Box>
      </Box>
      <Typography variant='subtitle2' component='p' sx={{ fontWeight: 700 }}>
        RS {valor}
      </Typography>
    </Box>
  );
};

export const DespesasCompartilhadas = () => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "30px",
      height: "100%",
    }}
  >
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        gap: "30px",
      }}
    >
      <Typography variant='subtitle3' color='primary' gutterBottom>
        Despesas compartilhadas
      </Typography>
      <UsuarioCompartilhado src={Usuario1} name='Patricia' valor='1165,00' />
      <UsuarioCompartilhado src={Usuario2} name='Gabriel' valor='1135,00' />
    </Box>

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button variant='borderSecondary'>Adicionar Usuário</Button>
      <Button
        variant='outlined'
        color='secondary'
        sx={{ borderRadius: "20px", paddingInline: "36px" }}
      >
        Excluir
      </Button>
    </Box>
  </Card>
);
