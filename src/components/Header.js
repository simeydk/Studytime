import React, {useState, useEffect} from "react";
import { Link } from "gatsby";
import Logo from "./utility/Logo";
import "./Header.css";

function Header() {

  const breakpoint = 620;
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
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
