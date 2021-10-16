import React from "react";
import { Link } from "react-router-dom";
import SubModal from "./Modal";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-light ">
        {/* <!-- Navbar content --> */}
        <Link to="/">
          <img
            className="navLogo"
            src="https://cdn-icons-png.flaticon.com/512/4291/4291571.png"
            alt="navLogo"
          />
        </Link>
        <Link
          to="/productlist"
          type="button"
          className="btn btn-outline-dark btn-lg"
        >
          Product List
        </Link>

        <SubModal />
      </nav>
    </div>
  );
}

export default NavBar;
