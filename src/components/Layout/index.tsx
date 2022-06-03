import { Menu } from "../Menu";
import { Container, ContainerConteudo } from "./Layout.style";

export const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Menu />
      <ContainerConteudo>{children}</ContainerConteudo>
    </Container>
  );
};
