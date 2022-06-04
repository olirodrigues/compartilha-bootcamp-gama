import ImagemCadastro from "../../assets/images/Cadastro/cadastro.svg";
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
} from "./Cadastro.style";

export const Cadastro = () => {
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
          Criar conta
        </Typography>
        <LoginGoogle>
          <Button variant='borderGoogle' fullWidth startIcon={<FaGoogle />}>
            Registrar com o Google
          </Button>
        </LoginGoogle>
        <Divider sx={{ width: "100%" }}>ou</Divider>
        <FormContainer>
          <TextField variant='outlined' label='Nome'></TextField>
          <TextField variant='outlined' label='Email' type='email'></TextField>
          <TextField variant='outlined' label='Senha' type='password'></TextField>
          <TextField variant='outlined' label='Repita sua senha' type='password'></TextField>
          <Link to='/login'>
            <Button variant='borderSecondary' fullWidth>
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
      </ContainerForm>
      {desktop && <ContainerImagem img={ImagemCadastro} />}
    </Container>
  );
};
