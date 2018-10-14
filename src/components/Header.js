import React from "react";

const Header = ({ title, mantra }) => (
  <header className="header">
    <div className="header__title">
      <img className="header__title__image" src="../images/faces-white.png" alt={title} />
      <h1>{title}</h1>
    </div>
    <h2 className="header__mantra">{mantra}</h2>
  </header>
);

export default Header;
