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
                        <a href="#">Todo List</a>
                        <a href="#">Calendar</a>
                        <a href="#">Reminder</a>
                        <a href="#">Planning</a>
                 </div>
                </div>
                
                <div className="dropdown">
                  <li className="dropdown-1">Company</li>
                 <div className="dropdown-content">
                        <a href="#">History</a>
                        <a href="#">Our Team</a>
                        <a href="#">Blog</a>
                 </div>
                </div>
            <li>Careers</li>
            <li>About</li>
            </ul>
        </div>
      <div className="right-section">
        <button>Login</button>
        <button>Register</button>
      </div>
      <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
    </header>
}

export default Header;