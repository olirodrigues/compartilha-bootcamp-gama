import ImagemLogin from "../../assets/images/Login/login.svg";
import Logo from "../../assets/images/logo.svg";

import { Button, Divider, TextField, Typography } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import {
  Container,
  ContainerForm,
  ContainerImagem,
  FormContainer,
  LoginGoogle,
} from "./Login.style";

export function Login() {
  const desktop = useMediaQuery({
    query: "(min-width:1025px)",
  });

  return (
    <Container>
      <ContainerForm>
        <Link to='/'>
          <img className='logo' src={Logo} alt='' />
        </Link>
        <Typography variant='h3' component='h1' color='complementaryBlack' sx={{ fontWeight: 700 }}>
          Acessar conta
        </Typography>
        <LoginGoogle>
          <Button variant='borderGoogle' fullWidth startIcon={<FaGoogle />}>
            Entrar com o Google
          </Button>
        </LoginGoogle>
        <Divider sx={{ width: "100%" }}>ou</Divider>
        <FormContainer>
          <TextField variant='outlined'></TextField>
          <TextField variant='outlined'></TextField>
          <Link to='/dashboard'>
            <Button variant='borderSecondary' fullWidth>
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
      </ContainerForm>
      {desktop && <ContainerImagem img={ImagemLogin} />}
    </Container>
  );
}
