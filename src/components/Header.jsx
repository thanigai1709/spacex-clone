import React from "react";
import Logo from "./images/spacex-logo-black-and-white.png";
import Sidenav from "./Sidenav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrp">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="header-logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 text-right">
            <Sidenav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
