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
  left: 50px;
  /* padding-top: 20px; */
  /* align-items: center; */
  
  /* background-color: red; */

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
  padding-left: 10px;
  padding-right: 10px;
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
   background-color: pink;
   position: relative;
   top: -7px;
   visibility: visible;
   position: relative;
   right: 60px;

   @media (min-width: 430px) {
    /* Styles for screens larger than 768px */
     display: none;
  }
   @media (max-width: 374px) {
    /* Styles for screens larger than 768px */
    position: relative;
    right: 66px;
    background-color: red;
    margin-right: 200px;
  }
   @media (max-width: 319px) {
    /* Styles for screens larger than 768px */
    position: relative;
    right: 90px;
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