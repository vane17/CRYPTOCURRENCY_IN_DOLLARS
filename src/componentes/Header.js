import React, { useEffect } from "react";

import Cookies from "universal-cookie";
import logo from "../assets/logo.png";
import "../styles/styles.css";

const cookies = new Cookies();

const Header = () => {

  const signOff = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };
  
  useEffect(() => {
    if (!cookies.get("username")) {
      window.location.href = "./";
    }
  });

  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <button onClick={signOff} className="header__button">
      Sign off
      </button>
    </div>
  );
};

export { Header };
