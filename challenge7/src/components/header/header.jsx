import React from 'react';
import "./header.css";

function Header(){
    return<div className="header">
        <div className="brand-name">
            <h2>sunnyside</h2>
        </div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
            <div className="navbar-link">
                <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            </div>
    </div>
}

export default Header;