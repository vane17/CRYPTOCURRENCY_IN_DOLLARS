import React from "react";
import { useGetCoins } from "../hooks/useGetCoins";
import { CoinsItem } from "../componentes/CoinsItem";
import "../styles/styles.css";

const CoinsList = () => {
  const url = "https://api.coinlore.net/api/tickers/";
  const item = useGetCoins(url);

  return (
    <section className="CoinsList">
      <div className="CoinsList__conteiner">
        {!item
          ? "cargando...."
          : item.data.map((product, index) => (
              <CoinsItem product={product} key={product.id} />
            ))}
      </div>
    </section>
  );
};

export { CoinsList };

