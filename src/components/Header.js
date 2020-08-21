import React from "react";

import Form from "./Form";

import imagemHeader from "../assets/imgs/grafico_homem.png";
import logo from "../assets/imgs/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header_banner-left">
        <img src={logo} alt="" srcSet="" id="logo" />
        <h1 className="header_title">
          <b>Você tem sonhos e metas?<br /></b> Nós temos soluções<br />para te ajudar a chegar
          lá
      </h1>
        <Form />
      </div>
      <div className="header_banner-right">
        <div className="banner-right_button-wrapper">
        </div>
        <img id="header_image" src={imagemHeader} alt="" />
      </div>
    </header>
  );
};

export default Header;