import ImagemLogin from "../../assets/images/Login/login.svg";
import Logo from "../../assets/images/logo.svg";
import { FaGoogle } from "react-icons/fa";

import * as Styled from "./Login.style";

import { Button, Divider, TextField, Typography } from "@mui/material";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export function Login() {
  const desktop = useMediaQuery({
    query: "(min-width:1025px)",
  });

  return (
    <Styled.Container>
      <Styled.ContainerForm>
        <Link to='/'>
          <img className='logo' src={Logo} alt='' />
        </Link>
        <Typography variant='h3' component='h1' color='complementaryBlack' sx={{ fontWeight: 700 }}>
          Acessar conta
        </Typography>
        <Styled.LoginGoogle>
          <Button variant='borderGoogle' fullWidth startIcon={<FaGoogle />}>
            Entrar com o Google
          </Button>
        </Styled.LoginGoogle>
        <Divider sx={{ width: "100%" }}>ou</Divider>
        <Styled.FormContainer>
          <TextField variant='outlined'></TextField>
          <TextField variant='outlined'></TextField>
          <Link to='/dashboard'>
            <Button variant='borderSecondary' fullWidth>
              Entrar
            </Button>
          </Link>
        </Styled.FormContainer>
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
      </Styled.ContainerForm>
      {desktop && <Styled.ContainerImagem img={ImagemLogin} />}
    </Styled.Container>
  );
}
