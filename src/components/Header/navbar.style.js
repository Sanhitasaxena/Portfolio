import styled from "styled-components"
import { Twirl as Hamburger } from 'hamburger-react'

export const NavbarContainer = styled.nav`
width: 100%;
height: ${(props)=> ((props.extendNavbar)? "43vh" : "70px") };
background-image: linear-gradient(rgb(252, 235, 235), rgb(138, 138, 147));
overflow-x: hidden;
`

export const NavbarInnerContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 20px;
`

export const NavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-size: medium;

  &:hover {
    color: white;
  }

`

 export const NavMenuItem = styled.li`
  list-style : none;
  height: 33px;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  border-radius: 10px;

  &:hover {
    background-color: grey;
    color: white;
  }

  @media (max-width: 430px) {
     visibility: hidden;
  }

`;

export const BurgerDiv = styled.div`
   position: relative;
   top: -7px;
   visibility: visible;
   position: relative;
   right: 60px;
   background-color: grey;
   border-radius: 10px;
   color: white;

   @media (min-width: 430px) {
     display: none;
  }
   @media (max-width: 376px) {
    position: relative;
    right: 90px;
  }
   @media (max-width: 321px) {
    position: relative;
    right: 115px;
  }

` 

export const OpenLinksButton = styled(Hamburger)`

`



export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;

`

export const NavExtendedLink = styled.li`
  list-style : none;
  height: 33px;
  width: 98%;
  text-align: center;
  padding-top: 2px;

  &:hover {
    border: 1px solid #d3d3d3;
    background-color: grey;
    color: white;
  }

  @media (min-width: 430px) {
     visibility: hidden;
  }
`
