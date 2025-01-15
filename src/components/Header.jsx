import React from "react";
import TrollFace from "../assets/trollface.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={TrollFace} alt="Trollface image" />
      <span className="header__logo--text">Meme Generator</span>
    </header>
  );
};

export default Header;
