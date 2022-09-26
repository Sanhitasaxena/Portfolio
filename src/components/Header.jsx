import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";


const Header = ()=>{

    return(
        <>
        <div id="mainContainer" className="container-fluid">
            <a href="#" className="toggle-bar">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
         <div id="navlist">
         <ul className="navLink">
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/projects">My Projects</Link></li>
            <li><Link to = "/about">About me</Link></li>
            <li><Link to = "#contact">Contact me</Link></li>
        </ul>
         </div>
        </div>
        </>
    )
}

export default Header