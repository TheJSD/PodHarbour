import React from 'react'
import styled from 'styled-components'

const NavButton = styled.button`
background: transparent;
padding: 15px;
color: #32334D;
border: none;
font-size: 16px;
font-weight:bold;
text-align:left;
width:175px;
height: 60px;
&:hover {
    background-color: #ffb83497;
    transition: 0.8s;
    border-radius: 5px;
    color: #32334D;
}
`

const NavBar = () => {

  return (

    <nav className="nav">
        <NavButton>Home</NavButton><br />
        <NavButton>All Podcasts</NavButton><br />
        <NavButton>Saved Podcasts</NavButton><br />
        <NavButton>Help</NavButton><br />
        <NavButton>About Us</NavButton><br />
    </nav>

  )
}

export default NavBar