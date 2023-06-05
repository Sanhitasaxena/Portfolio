import styled from "styled-components"
import { Twirl as Hamburger } from 'hamburger-react'

export const NavbarContainer = styled.nav`
width: 100%;
height: 70px;
/* background-color: black; */
background-image: linear-gradient(rgb(252, 235, 235), rgb(138, 138, 147));
/* display: flex;
flex-direction: column; */
overflow-x: hidden;
`

export const NavbarInnerContainer = styled.ul`
    width: 100%;
    /* height: 70px; */
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
  /* margin-right: 10px; */
  /* font-size: large; */

  height: 33px;
  width: auto;
  /* padding: 10px; */
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  padding-top: 2px;
  /* background-color: red; */
  border-radius: 10px;

  &:hover {
    background-color: grey;
    color: white;
  }

  @media (max-width: 430px) {
    /* Styles for screens larger than 768px */
     visibility: hidden;
  }

`;

export const BurgerDiv = styled.div`
   position: relative;
   top: -7px;
   visibility: visible;
   position: relative;
   right: 20px;
   background-color: grey;
   border-radius: 10px;
   color: white;

   @media (min-width: 430px) {
    /* Styles for screens larger than 768px */
     display: none;
  }
   @media (max-width: 376px) {
    /* Styles for screens larger than 768px */
    position: relative;
    right: 35px;
    /* margin-right: 150px; */
  }
   @media (max-width: 321px) {
    /* Styles for screens larger than 768px */
    position: relative;
    right: 55px;
  }
  
  /* visibility: hidden; */
   /* width: 10%; */
` 

export const OpenLinksButton = styled(Hamburger)`
    .hamburger-react{
    /* span {
      background-color: ${({ isOpen }) => (isOpen ? '#fff' : '#333')};
    } */
    
  }
`



export const NavbarExtendedContainer = styled.div`

`