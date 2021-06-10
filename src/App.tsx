import { useState } from "react";
import { Header } from "./components/Header";
import { Clubes } from "./pages/Clubes";
import { Partidas } from "./pages/Partidas";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [paginaSelecionada, setPaginaSelecionada] = useState<string>('partidas');

  return (
    <>
      <Header mudouPagina={setPaginaSelecionada} paginaSelecionada={paginaSelecionada} />
      {paginaSelecionada === 'clubes' ? (<Clubes />) : (<Partidas />)}
      <GlobalStyle />
    </>
  );
}
