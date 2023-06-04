import React, { useState, useCallback } from "react";
// import { Navbar} from "react-bootstrap";
// import { Nav } from "react-bootstrap";
// import "../../components/Header/header.css"
// import "../../components/Header/navbar.css"
import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavMenu,
  NavMenuItem,
  NavLink,
  OpenLinksButton,
  BurgerDiv
} from "../../components/Header/navbar.style";



const MyNavbar = () => {
  return (
    <>
      {/* <Navbar> */}
      {/* <Navbar.Collapse> */}
      {/* <Nav className="d-flex justify-content-between"> */}
      {/* <ul className="navLink d-flex justify-content-between">
            <li><a href = "/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href = "#projects">Projects</a></li>
            <li><a href = "#skills-parent">Skills</a></li>
            <li><a href = "#exp-main">Experience</a></li>
            <li><a href = "resume/Updated-resume-sanhita.pdf"
            download="Updated-resume-sanhita.pdf">Download Resume</a></li>
        </ul> */}
      {/* </Nav> */}
      {/* </Navbar.Collapse> */}
      {/* </Navbar> */}
      <NavbarContainer>
        <NavMenu>
         <NavMenuItem>
          <NavLink href="/">Home</NavLink>
         </NavMenuItem>
         <NavMenuItem >
         <NavLink href="#projects">About</NavLink>
         </NavMenuItem>
         <NavMenuItem>
         <NavLink href="#projects">Projects</NavLink>
         </NavMenuItem>
         <NavMenuItem>
         <NavLink href="#skills-parent">Skills</NavLink>
         </NavMenuItem>
         <NavMenuItem>
         <NavLink href="#exp-main">Experience</NavLink>
         </NavMenuItem>
         <NavMenuItem>Download resume</NavMenuItem>
         
         {/* <Hamburger size={24} /> */}
         <BurgerDiv>
         <OpenLinksButton size={24} className="hamburger-react"/>
         </BurgerDiv>
        </NavMenu>
        
        <NavbarExtendedContainer></NavbarExtendedContainer>
      </NavbarContainer>
      
    </>
  );
};

export default MyNavbar;
