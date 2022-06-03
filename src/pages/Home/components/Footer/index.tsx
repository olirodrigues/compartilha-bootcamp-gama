import Logo from "../../../../assets/images/logo2.svg";

import { ContainerFooter, ContainerIconeSocial, ItemListaSocial } from "./Footer.style";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Typography } from "@mui/material";
import { MdOutlineCopyright } from "react-icons/md";

export function Footer() {
  return (
    <ContainerFooter>
      <img className='logo' src={Logo} alt='' />
      <Typography
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        variant='subtitle2'
        color='primary.dark'
      >
        <MdOutlineCopyright size={16} /> Copyright 2022- Compartilha Ltda
      </Typography>
      <ContainerIconeSocial>
        <ItemListaSocial>
          <FaLinkedinIn size={15} />
        </ItemListaSocial>
        <ItemListaSocial>
          <FaFacebookF size={15} />
        </ItemListaSocial>
        <ItemListaSocial>
          <FaInstagram size={15} />
        </ItemListaSocial>
      </ContainerIconeSocial>
    </ContainerFooter>
  );
}
