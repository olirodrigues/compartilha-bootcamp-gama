import { Button, Divider, TextField, Typography } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, FormContainer, LoginGoogle } from "./Login.style";

export function Login() {
  return (
    <Container>
      <Header HiddenBotao={true} />
      <Typography variant='h3'>Acessar conta</Typography>
      <LoginGoogle>
        <Button variant='borderPrimary' fullWidth startIcon={<FaGoogle />}>
          Entrar com o Google
        </Button>
      </LoginGoogle>
      <Divider>ou</Divider>
      <FormContainer>
        <TextField variant='outlined'></TextField>
        <TextField variant='outlined'></TextField>
        <Link to='/dashboard'>
          <Button variant='borderPrimary' fullWidth>
            Entrar
          </Button>
        </Link>
      </FormContainer>
      <Link to='/cadastro'>
        <Typography variant='body1' align='center'>
          Não tenho uma conta. <Typography variant='bold'>Cadastrar</Typography>
        </Typography>
      </Link>
      <a href='/login'>
        <Typography variant='body1' align='center'>
          Esqueceu sua senha?
        </Typography>
      </a>
    </Container>
  );
}
