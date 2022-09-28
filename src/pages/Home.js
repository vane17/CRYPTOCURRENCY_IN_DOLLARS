import React from "react";
import { Header } from "../componentes/Header";
import { CoinsList } from "../containers/CoinsList";

const Home = () => {
  return (
    <>
      <Header />
      <CoinsList />
    </>
  );
};

export { Home };
