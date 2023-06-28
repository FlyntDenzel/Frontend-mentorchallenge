import React from "react";

function Header() {
    return <header className="header">
        <div className="logo">
            <h2>snap</h2>
        </div>
        <div className="list">
            <ul>
                <div className="dropdown">
                  <li className="dropdown-1">Features</li>
                 <div className="dropdown-content">
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                 </div>
                </div>
                
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