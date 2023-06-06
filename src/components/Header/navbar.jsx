import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavMenu,
  NavMenuItem,
  NavLink,
  OpenLinksButton,
  BurgerDiv,
  NavExtendedLink,
} from "../../components/Header/navbar.style";

const MyNavbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleClick = () => {
    setExtendNavbar((curr) => !curr);
    console.log("clicked");
  };

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
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

          <BurgerDiv onClick={handleClick}>
            <OpenLinksButton size={24} className="hamburger-react" />
          </BurgerDiv>
        </NavMenu>

        {extendNavbar && (
          <NavbarExtendedContainer>
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
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default MyNavbar;
