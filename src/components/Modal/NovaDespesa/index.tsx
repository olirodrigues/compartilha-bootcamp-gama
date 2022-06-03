import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import ptBrLocale from "date-fns/locale/pt-BR";
import { useState } from "react";
import { MdAdd, MdClose, MdHomeWork, MdOutlineNote, MdOutlineSearch } from "react-icons/md";
import { RiPercentLine } from "react-icons/ri";

import * as Styled from "./NovaDespesa.style";

export function NovaDespesa() {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CategoriasDespesas = [
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
  ];

  return (
    <>
      <Button
        variant='borderSecondary'
        startIcon={<MdAdd />}
        color='secondary'
        onClick={handleClickOpen}
      >
        Nova despesa
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Styled.Titulo variant='h4' sx={{ fontWeight: 700 }}>
          Nova despesa
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
              startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
            }}
          />
          <Styled.TwoColumn>
            {/* Switch Pago */}
            <FormControlLabel
              value='start'
              control={<Switch color='secondary' />}
              label='Pago'
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
          <FormControlLabel
            value='end'
            control={<Switch color='secondary' />}
            label='Compartilhar conta'
            labelPlacement='end'
          />
          <Styled.TwoColumn>
            {/* email */}
            <TextField
              fullWidth
              label='Email do usuário para compartilhar'
              color='secondary'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <MdOutlineSearch size={24} />
                  </InputAdornment>
                ),
              }}
            />
            {/* porcentagem */}
            <TextField
              sx={{ width: "15ch" }}
              color='secondary'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <RiPercentLine size={15} />
                  </InputAdornment>
                ),
              }}
            />
          </Styled.TwoColumn>
          {/* categorias */}
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            sx={{ width: "100%" }}
            options={CategoriasDespesas}
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
}
