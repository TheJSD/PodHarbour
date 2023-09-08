import React from "react"
import styled from "styled-components"

const NavWrapper = styled.nav`
    position: fixed;
    margin-left: 1%;
    padding-top: 40px;
`
const NavButton = styled.button`
background: transparent;
padding: 15px;
color: #32334D;
border: none;
font-size: 16px;
font-weight:bold;
text-align:left;
width:150px;
height: 60px;
&:hover {
    background-color: #ffb83497;
    transition: 0.8s;
    border-radius: 5px;
    color: #32334D;
}
`

const NavLink = styled.a`
  text-decoration: none;
  color:inherit;
    &&:hover {
      text-decoration: none;
      color:inherit;
    }
    &&:active {
      text-decoration: none;
    color:inherit;
    }
    &&:hover {
      text-decoration: none;
      color:inherit;
    }`
      
    
const NavBar = () => {

  return (
    <NavWrapper>
        <NavLink href="/"><NavButton>Home</NavButton></NavLink><br />
        <NavLink href="/all"><NavButton>All Podcasts</NavButton></NavLink><br />
        <NavLink href="/subscribed"><NavButton>Subscribed Podcasts</NavButton></NavLink><br />
        <NavButton>Help</NavButton><br />
        <NavButton>About Us</NavButton><br />
    </NavWrapper>
  )
}

export default NavBar