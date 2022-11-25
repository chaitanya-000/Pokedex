import React from "react";
import NavBarText from "../../atoms/NavbarText/NavBarText";
import Logo from "../../atoms/pokedexLogo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <Logo />
      <div className="dividerLine"></div>
      <NavBarText />
    </div>
  );
};

export default Navbar;
