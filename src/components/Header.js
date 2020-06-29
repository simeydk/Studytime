import React from "react";
import { Link } from "react-router-dom";
import Logo from "./utility/Logo";
import "./Header.css";

function Header() {
  const width = window.innerWidth;
  const breakpoint = 620;

  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="Admin">
        {width < breakpoint ? (
          <button className="btn-purple">Login</button>
        ) : (
          <>
            <button className="btn-purple">Login</button>
            <button className="btn-purple">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
