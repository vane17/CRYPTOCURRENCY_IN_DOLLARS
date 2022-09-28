import React, { useState } from "react";
import { Details } from "./Details";
import "../styles/styles.css";

const CoinsItem = ({ product }) => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="coinsItem">
      <div>
        <div className="coinsItem__info--name">
          Crypto currency name: <h3>{product.name}</h3>
        </div>
        <div className="coinsItem__info--price">
          Change in dollars: $ <h4>{product.price_usd}</h4>
        </div>

        <button
          className="coinsItem__button"
          onClick={() => setToggle(!toggle)}
        >
          Details
        </button>
      </div>
      
      {toggle && (
        <Details product={product} toggle={toggle} setToggle={setToggle} />
      )}
    </div>
  );
};

export { CoinsItem };
