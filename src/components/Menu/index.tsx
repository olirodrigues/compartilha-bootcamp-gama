import Logo from "../../assets/images/logo.svg";

import { ContainerMenu, ContaiverNav } from "./Menu.style";
import {
  MdExitToApp,
  MdGroups,
  MdManageAccounts,
  MdOutlineTrendingDown,
  MdOutlineTrendingUp,
  MdSpaceDashboard,
} from "react-icons/md";
import { MenuButton } from "./MenuButton";

export const Menu = () => {
  return (
    <ContainerMenu>
      <img className='logo' src={Logo} alt='' />
      <ContaiverNav>
        <MenuButton link='/dashboard' Icon={MdSpaceDashboard}>
          Dashboard
        </MenuButton>
        <MenuButton link='/receitas' Icon={MdOutlineTrendingUp}>
          Receitas
        </MenuButton>
        <MenuButton link='/despesas' Icon={MdOutlineTrendingDown}>
          Despesas
        </MenuButton>
        <MenuButton link='/despesas-compartilhadas' Icon={MdGroups}>
          Despesas compartilhadas
        </MenuButton>
        <MenuButton disabled link='perfil' Icon={MdManageAccounts}>
          Meu perfil
        </MenuButton>
        <MenuButton link='/' Icon={MdExitToApp}>
          Sair
        </MenuButton>
      </ContaiverNav>
    </ContainerMenu>
  );
};
