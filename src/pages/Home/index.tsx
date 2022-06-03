import React from "react";

import { ContainerHome } from "./Home.style";

import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <ContainerHome>
      <Header />
      <MainContent />
      <Footer />
    </ContainerHome>
  );
}
