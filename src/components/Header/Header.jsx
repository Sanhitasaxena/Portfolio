import React from "react";
// import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import "../Header/header.css"

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
            <li><a href = "/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href = "#projects">Projects</a></li>
            <li><a href = "#skills-parent">Skills</a></li>
            <li><a href = "#exp-main">Experience</a></li>
            <li><a href = "#contact">Download Resume</a></li>
        </ul>
         </div>
        </div>
        </>
    )
}

export default Header