import Logo from "../../../../assets/images/logo.svg";

import { ContainerFooter, ContainerIconeSocial, ItemListaSocial } from "./Footer.style";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Typography } from "@mui/material";

export function Footer() {
  return (
    <ContainerFooter>
      <img className='logo' src={Logo} alt='' />
      <Typography variant='subtitle2'> Copyright 2022- Gama Academy </Typography>
      <ContainerIconeSocial>
        <ItemListaSocial>
          <FaLinkedinIn className='homeSocialIcons' />
        </ItemListaSocial>
        <ItemListaSocial>
          <FaFacebookF className='homeSocialIcons' />
        </ItemListaSocial>
        <ItemListaSocial>
          <FaInstagram className='homeSocialIcons' />
        </ItemListaSocial>
      </ContainerIconeSocial>
    </ContainerFooter>
  );
}
