import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
// import logo from "../../images/fmlogo2.svg";
import logo from "../../images/favicon.ico";
// import logo from "../../images/txtlogo.svg";

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img alt="" src={logo} width="40" className="img-logo" /> {"  "} FOR
            MINUTES
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/minutes" className="nav-links" onClick={closeMobileMenu}>
              MinutesList
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
              Post
            </Link>
          </li>
        </ul>
        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </nav>
    </>
  );
}

export default Navigation;
