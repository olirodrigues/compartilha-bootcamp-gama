import ImagemCadastro from "../../assets/images/Cadastro/cadastro.svg";
import Logo from "../../assets/images/logo.svg";
import { FaGoogle } from "react-icons/fa";

import * as Styled from "./Cadastro.style";

import { Button, Divider, TextField, Typography } from "@mui/material";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const Cadastro = () => {
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
          Criar conta
        </Typography>
        <Styled.LoginGoogle>
          <Button variant='borderGoogle' fullWidth startIcon={<FaGoogle />}>
            Registrar com o Google
          </Button>
        </Styled.LoginGoogle>
        <Divider sx={{ width: "100%" }}>ou</Divider>
        <Styled.FormContainer>
          <TextField variant='outlined' label='Nome'></TextField>
          <TextField variant='outlined' label='Email' type='email'></TextField>
          <TextField variant='outlined' label='Senha' type='password'></TextField>
          <TextField variant='outlined' label='Repita sua senha' type='password'></TextField>
          <Link to='/login'>
            <Button variant='borderSecondary' fullWidth>
              Cadastrar
            </Button>
          </Link>
        </Styled.FormContainer>

        <Typography variant='body1' align='center'>
          Já tenho uma conta?{" "}
          <Link to='/login'>
            <Typography variant='bold'>Acessar conta</Typography>
          </Link>
        </Typography>
      </Styled.ContainerForm>
      {desktop && <Styled.ContainerImagem img={ImagemCadastro} />}
    </Styled.Container>
  );
};
