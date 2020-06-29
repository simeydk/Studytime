import React from "react";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

function Header() {
  const width = window.innerWidth;
  const breakpoint = 620;
  
  return (
    <div className="Header">
      <Logo />
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
