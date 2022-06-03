import { InputAdornment, TextField } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";

export const FilterTransacao = () => {
  return (
    <TextField
      sx={{ width: "340px" }}
      label='Pesquisar valor, categoria ou descrição'
      color='secondary'
      InputProps={{
        endAdornment: (
          <InputAdornment position='start'>
            <MdOutlineSearch size={24} />
          </InputAdornment>
        ),
      }}
    />
  );
};
