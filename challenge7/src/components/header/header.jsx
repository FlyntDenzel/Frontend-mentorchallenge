import React from 'react';
import "./header.css";
import image from "./../../images/desktop/image-header.jpg"

function Header(){
    return<div className="container">
         <div className="header">
        <div className="brand-name">
            <h2>sunnyside</h2>
        </div>
            <div className="navbar-link">
                <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            </div>
    </div>
    </div>
   
}

export default Header;