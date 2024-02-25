import React from "react";
import "./App.css";
import robuicon from "./images/robu-icon.jpg";

function Header() {
    return(
        <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content">
            <img src={robuicon} style={{borderRadius: '10%', opacity: '.6', width: '350px', height: '275px'}}  alt="icon" />
        </div>      
    </header>
    );
}

export default Header;