import React from "react";
import css from "./Header.module.css";
import logo from "../../See-through.svg";

function Header() {
  return (
    <div className={css.Header}>
      <h1>3o'clocktopus</h1>
      <img src={logo} alt="octopus logo" />
      <h3>Connect Teams. Boost Productivity</h3>
    </div>
  );
}

export default Header;
