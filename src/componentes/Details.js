import React from "react";
import "../styles/styles.css";

const Details = ({ product, toggle, setToggle }) => {
  return (
    <aside className="details">
      <div className="details__title">
        <div
          className="details__title--close"
          onClick={() => setToggle(!toggle)}
        >
          X
        </div>
        <p className="title">Detail Crypto currency</p>
      </div>
      <div>
        <div className="details--item">
          NAME: <p className="details--item-value">{product.name}</p>
        </div>
        <div className="details--item">
          PERCENTAGE CHANGE IN 1 HOUR:{" "}
          <p className="details--item-value">{product.percent_change_1h}</p>
        </div>
        <div className="details--item">
          PERCENTAGE CHANGE IN 7 DAYS:{" "}
          <p className="details--item-value">{product.percent_change_7d}</p>
        </div>
        <div className="details--item">
          PERCENTAGE CHANGE IN 24 HOUR:{" "}
          <p className="details--item-value">{product.percent_change_24h}</p>
        </div>
        <div className="details--item">
          PRICE IN DOLLARS:{" "}
          <p className="details--item-value">{product.price_usd}</p>
        </div>
        <div className="details--item">
          POSITION IN THE RANKING:{" "}
          <p className="details--item-value">{product.rank}</p>
        </div>
      </div>
    </aside>
  );
};

export { Details };
