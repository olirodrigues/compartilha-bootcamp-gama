import { useState } from "react";
import { MdAdd, MdClose, MdHomeWork, MdOutlineNote, MdOutlinePriceChange } from "react-icons/md";
import ptBrLocale from "date-fns/locale/pt-BR";

import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  FormControlLabel,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";

import * as Styled from "./NovaReceita.styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const NovaReceita = () => {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CategoriasReceitas = [
    { icon: <MdHomeWork />, label: "Salário" },
    { icon: <MdHomeWork />, label: "Pagamentos" },
  ];

  return (
    <>
      <Button
        variant='borderSecondary'
        startIcon={<MdAdd />}
        color='secondary'
        onClick={handleClickOpen}
      >
        Nova Receita
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Styled.Titulo variant='h4' sx={{ fontWeight: 700 }}>
          Nova Receita
          <Styled.CloseButton onClick={handleClose}>
            <MdClose />
          </Styled.CloseButton>
        </Styled.Titulo>

        <DialogContentText
          sx={{ m: 0, p: 2, display: "flex", flexDirection: "column", gap: 3, color: "secondary" }}
        >
          {/* valor */}
          <TextField
            color='secondary'
            label='Valor'
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ display: "flex", gap: "10px" }} position='start'>
                  <MdOutlinePriceChange size={24} />
                  R$
                </InputAdornment>
              ),
            }}
          />
          <Styled.TwoColumn>
            {/* Switch Pendente */}
            <FormControlLabel
              value='start'
              control={<Switch color='secondary' />}
              label='Pendente'
              labelPlacement='start'
            />
            {/* date */}
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBrLocale}>
              <DatePicker
                views={["day"]}
                label='Data'
                value={month}
                minDate={new Date("2020-03-01")}
                maxDate={new Date("2029-06-01")}
                onChange={(newMonth) => {
                  setMonth(newMonth);
                }}
                renderInput={(params) => <TextField fullWidth color='secondary' {...params} />}
              />
            </LocalizationProvider>
          </Styled.TwoColumn>
          {/* descrição */}
          <TextField
            label='Descrição'
            color='secondary'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MdOutlineNote size={24} />
                </InputAdornment>
              ),
            }}
          />
          {/* categorias */}
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            sx={{ width: "100%" }}
            options={CategoriasReceitas}
            renderInput={(params) => <TextField color='secondary' {...params} label='Categoria' />}
          />
        </DialogContentText>
        <DialogActions>
          <Button
            sx={{ w: "165px", margin: "auto", marginBottom: "30px" }}
            variant='borderSecondary'
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
