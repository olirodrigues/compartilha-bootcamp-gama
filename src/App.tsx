import React from "react";
import { GlobalStyles, Theme } from "./assets/styles/Global";
import { Routes, Route } from "react-router-dom";

import { Global } from "@emotion/react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import { Cadastro } from "./pages/Cadastro";
import { Dashboard } from "./pages/Dashboard";
import { Receitas } from "./pages/Receitas";
import { Despesas } from "./pages/Despesas";
import { DespesasCompartilhadas } from "./pages/DespesasCompartilhadas";

export function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/receitas' element={<Receitas />} />
          <Route path='/despesas' element={<Despesas />} />
          <Route path='/despesas-compartilhadas' element={<DespesasCompartilhadas />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
