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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import ptBrLocale from "date-fns/locale/pt-BR";
import React, { EventHandler, useEffect, useState } from "react";
import { MdAdd, MdClose, MdOutlineNote } from "react-icons/md";
import { RiPercentLine } from "react-icons/ri";

import * as Styled from "./NovaDespesa.style";
import { Despesa } from "../../../@types/api";
import { getUser } from "../../../usuario";
import { addDespesa } from "../../../api/carteira";
import { getCategorias } from "../../../api/categoria";
import { getUsuarios } from "../../../api/usuario";

const novaReceita: Despesa = {
  descricao: "",
  valor: 0,
  data: "",
  tipo: "despesa",
  categoria_idcategoria: 0,
  compartilha: 0,
  idusuario: 0,
  status: "0",
};

export function NovaDespesa() {
  const usuario = getUser();
  const [open, setOpen] = useState(false);
  const [despesa, setDespesa] = useState<Despesa>({ ...novaReceita });
  const [date, setDate] = useState<Date | null>(null);
  const [compartilhamentoPercent, setCompartilhamentoPercent] = useState(0);
  const [categorias, setCategorias] = useState<{ label: string; id: number }[]>(
    []
  );
  const [usuarios, setUsuarios] = useState<{ label: string; id: number }[]>([]);

  useEffect(() => {
    if (usuario) {
      setDespesa({ ...despesa, idusuario: usuario.idusuario });

      getUsuarios().then((respostaUsuarios) => {
        setUsuarios(
          respostaUsuarios
            .filter((user) => user.idusuario !== usuario.idusuario)
            .map((usuario) => ({
              id: usuario.idusuario,
              label: usuario.email,
            }))
        );
      });
    }

    getCategorias().then((respostaCategorias) => {
      setCategorias(
        respostaCategorias.map((categoria) => ({
          id: categoria.idcategoria,
          label: categoria.descricao,
        }))
      );
    });
  }, [usuario]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDespesa({ ...novaReceita });
    setOpen(false);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // valor, data, descricao, categoria_idcategoria, tipo, idusuario, status, idusuario_compartilha
    if (usuario) {
      // Caso a despesa seja compartilhada, vamos criar duas despesas, 1 pra cada usuario
      if (despesa.compartilha === 1 && despesa.idusuario_compartilha) {
        Promise.all([
          // Adiciona despesa para o usuario logado
          addDespesa({
            ...despesa,
            valor: despesa.valor * (1 - compartilhamentoPercent / 100),
          }),
          // Adiciona despesa para o usuario selecionado
          addDespesa({
            ...despesa,
            valor: despesa.valor * (compartilhamentoPercent / 100),
            idusuario: despesa.idusuario_compartilha,
            idusuario_compartilha: usuario.idusuario,
          }),
        ]).then(() => {
          handleClose();
        });
      }
    }
  };

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
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: "secondary",
          }}
        >
          {/* valor */}
          <TextField
            color='secondary'
            label='Valor'
            type='number'
            onChange={(e) =>
              setDespesa({ ...despesa, valor: parseInt(e.target.value) })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>R$</InputAdornment>
              ),
            }}
          />
          <Styled.TwoColumn>
            {/* Switch Pago */}
            <FormControlLabel
              value='start'
              control={
                <Switch
                  color='secondary'
                  onChange={(_, checked) =>
                    setDespesa({ ...despesa, status: checked ? "1" : "0" })
                  }
                />
              }
              label='Pago'
              labelPlacement='start'
            />
            {/* date */}
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ptBrLocale}
            >
              <DatePicker
                views={["day"]}
                label='Data'
                value={date}
                minDate={new Date("2020-03-01")}
                maxDate={new Date("2029-06-01")}
                onChange={(newDate) => {
                  if (newDate) {
                    setDate(newDate);
                    setDespesa({ ...despesa, data: newDate.toISOString() });
                  }
                }}
                renderInput={(params) => (
                  <TextField fullWidth color='secondary' {...params} />
                )}
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
            onChange={(e) =>
              setDespesa({ ...despesa, descricao: e.target.value })
            }
          />
          <FormControlLabel
            value='end'
            control={
              <Switch
                color='secondary'
                onChange={(e, checked) =>
                  setDespesa({ ...despesa, compartilha: checked ? 1 : 0 })
                }
              />
            }
            label='Compartilhar conta'
            labelPlacement='end'
          />
          <Styled.TwoColumn>
            {/* email usuario compartilhado */}
            <Autocomplete
              fullWidth
              disablePortal
              options={usuarios}
              disabled={despesa.compartilha === 0}
              onChange={(_, usuario) =>
                usuario &&
                setDespesa({ ...despesa, idusuario_compartilha: usuario.id })
              }
              renderInput={(params) => (
                <TextField
                  color='secondary'
                  {...params}
                  label='Email do usuário para compartilhar'
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position='start'>
                  //       <MdOutlineSearch size={24} />
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              )}
            />
            {/* porcentagem */}
            <TextField
              sx={{ width: "15ch" }}
              color='secondary'
              type='number'
              disabled={despesa.compartilha === 0}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <RiPercentLine size={15} />
                  </InputAdornment>
                ),
              }}
              value={compartilhamentoPercent}
              onChange={(e) =>
                setCompartilhamentoPercent(parseInt(e.target.value || "0"))
              }
            />
          </Styled.TwoColumn>
          {/* categorias */}
          <Autocomplete
            disablePortal
            sx={{ width: "100%" }}
            options={categorias}
            onChange={(_, categoria) =>
              categoria &&
              setDespesa({ ...despesa, categoria_idcategoria: categoria.id })
            }
            renderInput={(params) => (
              <TextField color='secondary' {...params} label='Categoria' />
            )}
          />
        </DialogContentText>
        <DialogActions>
          <Button
            sx={{ w: "165px", margin: "auto", marginBottom: "30px" }}
            variant='borderSecondary'
            onClick={handleSubmit}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
