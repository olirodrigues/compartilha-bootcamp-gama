import Logo from "../../assets/images/logo.svg";

import * as Styled from "./Header.style";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface HeaderProps {
  HiddenBotao: boolean;
}

export const Header = ({ HiddenBotao = false }: HeaderProps) => {
  return (
    <Styled.ContainerHeader>
      <Link to='/'>
        <img className='logo' src={Logo} alt='' />
      </Link>
      {!HiddenBotao && (
        <Link to='/login'>
          <Button variant='borderSecondary'>Acessar conta</Button>
        </Link>
      )}
    </Styled.ContainerHeader>
  );
};

Header.defaultProps = {
  HiddenBotao: false,
};
