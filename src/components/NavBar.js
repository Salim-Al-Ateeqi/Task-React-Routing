import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cookie.png";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="cookie" src={logo} alt="logo" width="50" />
      </Link>
      <Link to="/productlist" className="button">
        Product List
      </Link>
      <Link to="/detail" className="button">
        Details
      </Link>
    </div>
  );
}

export default NavBar;
