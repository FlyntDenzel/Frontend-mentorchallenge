import React from "react";

function Header() {
    return <header>
        <div className="logo">
            <h2>Snap</h2>
        </div>
        <div className="list">
            <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
            </ul>
        </div>
      <div className="right-section">
        <button>Login</button>
        <button>Register</button>
      </div>
        
    </header>
}

export default Header;