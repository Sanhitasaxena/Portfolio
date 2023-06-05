import React, { useState, useCallback, useEffect } from "react";
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
  BurgerDiv,
  NavExtendedLink
} from "../../components/Header/navbar.style";

const MyNavbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleClick = ()=>{
    setExtendNavbar((curr) => !curr)
    console.log("clicked")
   
  }

  // useEffect(()=>{
  //  console.log(extendNavbar? extendNavbar: "no")
  // },[extendNavbar])
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
      <NavbarContainer extendNavbar = {extendNavbar}>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="/">Home</NavLink>
          </NavMenuItem>
          <NavMenuItem>
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
          <BurgerDiv onClick={handleClick}>
            <OpenLinksButton
                // isOpen={isOpen}
                // onClick={handleClick}
              size={24}
              className="hamburger-react"
            />
          </BurgerDiv>
        </NavMenu>

        { extendNavbar && 
        <NavbarExtendedContainer>
          <NavExtendedLink>
            <NavLink href="/">Home</NavLink>
          </NavExtendedLink>
          <NavExtendedLink>
            <NavLink href="#projects">About</NavLink>
          </NavExtendedLink>
          <NavExtendedLink>
            <NavLink href="#projects">Projects</NavLink>
          </NavExtendedLink>
          <NavExtendedLink>
            <NavLink href="#skills-parent">Skills</NavLink>
          </NavExtendedLink>
          <NavExtendedLink>
            <NavLink href="#exp-main">Experience</NavLink>
          </NavExtendedLink>
          <NavExtendedLink>Download resume</NavExtendedLink>
        </NavbarExtendedContainer>}
      </NavbarContainer>
       
    </>
  );
};

export default MyNavbar;
