import { Button, ContainerHeader } from "./Header.style";

import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  HiddenBotao: boolean;
}

export const Header = ({ HiddenBotao = false }: HeaderProps) => {
  return (
    <ContainerHeader>
      <Link to='/'>
        <img className='logo' src={Logo} alt='' />
      </Link>
      {!HiddenBotao && (
        <Link to='/login'>
          <Button variant='contained'>Acessar conta</Button>
        </Link>
      )}
    </ContainerHeader>
  );
};

Header.defaultProps = {
  HiddenBotao: false,
};
