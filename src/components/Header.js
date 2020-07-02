import React, {useEffect} from "react";
import { Link } from "gatsby";
import Logo from "./utility/Logo";
import "./Header.css";

function Header() {

  useEffect(() => {
    const width = window.innerWidth;
    const breakpoint = 620;
    return width, breakpoint
  }, [])

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
