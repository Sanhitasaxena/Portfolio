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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";
import Resume from "../../../src/resume.pdf"


const MyNavbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleClick = () => {
    setExtendNavbar((curr) => !curr);
    console.log("clicked");
  };

  const notify = () => {
    console.log("toast")
    toast("Oops..coming soon!", {
      className: css({
        background: "#00FF00 !important",
        color: "white !important",
        fontWeight: "bold"
      })
    })
  };

  return (
    <><ToastContainer/>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavMenu>
          <NavMenuItem>
            <NavLink href="/">Home</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink
            onClick={notify}
            >About</NavLink>
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
          <NavMenuItem>
             <NavLink href={Resume} download="Sanhita_Resume.pdf">Download resume</NavLink>
          </NavMenuItem>

          <BurgerDiv onClick={handleClick}>
            <OpenLinksButton size={24} className="hamburger-react" />
          </BurgerDiv>
        </NavMenu>

        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavExtendedLink>
              <NavLink
              onClick={notify}>About</NavLink>
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
            <NavExtendedLink>
            <NavLink href={Resume} download="Sanhita_Resume.pdf">Download resume</NavLink>
            </NavExtendedLink>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default MyNavbar;
