import React from "react";
import Logo from "../Logo";
import "./Header.css";

function Header() {
  const width = window.innerWidth;
  const breakpoint = 620;
  
  return (
    <div className="Header">
      <div className="Logo">
      <Logo/>
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
