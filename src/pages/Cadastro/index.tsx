import { Button, Divider, TextField, Typography } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, FormContainer, LoginGoogle } from "./Cadastro.style";

export const Cadastro = () => {
  return (
    <Container>
      <Header HiddenBotao={true} />
      <Typography variant='h3'>Criar conta</Typography>
      <LoginGoogle>
        <Button variant='borderPrimary' fullWidth startIcon={<FaGoogle />}>
          Entrar com o Google
        </Button>
      </LoginGoogle>
      <Divider>ou</Divider>
      <FormContainer>
        <TextField variant='outlined' label='Digite seu nome'></TextField>
        <TextField variant='outlined' label='Digite seu email' type='email'></TextField>
        <TextField variant='outlined' label='Digite sua senha' type='password'></TextField>
        <TextField variant='outlined' label='Repita sua senha' type='password'></TextField>
        <Link to='/login'>
          <Button variant='borderPrimary' fullWidth>
            Cadastrar
          </Button>
        </Link>
      </FormContainer>

      <Typography variant='body1' align='center'>
        Já tenho uma conta?{" "}
        <Link to='/login'>
          <Typography variant='bold'>Acessar conta</Typography>
        </Link>
      </Typography>
    </Container>
  );
};
