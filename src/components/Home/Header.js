import React from 'react'
import Logo from "../Logo"
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <Logo/>
            <div className="Admin">
                <button className="btn-purple" >Login</button>
                <button className="btn-purple">Sign Up</button>
            </div>
        </div>
    )
}

export default Header
