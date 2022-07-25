import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="login">Login</NavLink>
    </div>
  );
};

export default Navbar;