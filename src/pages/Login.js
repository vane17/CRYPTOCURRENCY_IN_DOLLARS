import React, { useState, useEffect } from "react";
import "../styles/styles.css";

import axios from "axios";
import Cookies from "universal-cookie";
import logo from "../assets/logo.png";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUseName = (e) => {
    setUserName(e.target.value);
    //console.log(userName);
  };
  const handleChangePasword = (e) => {
    setPassword(e.target.value);
    //console.log(password);
  };

  const logIn = async () => {
    await axios
      .get(baseUrl, { params: { username: userName, password: password } })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("nombre", respuesta.nombre, { path: "/" });
          cookies.set("apellido", respuesta.apellido, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
          alert(`Welcome ${respuesta.nombre} ${respuesta.apellido}`);
          window.location.href = "./home";
        } else {
          alert("The username and password are not correct");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (cookies.get("username")) {
      window.location.href = "./home";
    }
  });

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="login__form">
          <label className="login__label">User name</label>
          <input
            type="text"
            name="userName"
            placeholder="user01"
            className="login__input input-email"
            onChange={handleChangeUseName}
          />

          <label className="login__label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="login__input input-password"
            onChange={handleChangePasword}
          />
        </form>
        <button className="button" onClick={logIn}>
          Log in
        </button>
        <a href="/">Forgot my password</a>
      </div>
    </div>
  );
};

export { Login };
