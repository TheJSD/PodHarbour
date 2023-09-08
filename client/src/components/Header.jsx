import React from 'react'
import styled from 'styled-components'
import PodHarbour from '../../assets/site_images/Logo_PodHarbour.png'
import Logo from '../../assets/site_images/Logo_Orange.png'

const HeaderWrapper = styled.header`
  background-color: #32334d;
  padding: 2px 2px 0px 6px;
  position: fixed;
  top: 0%;
  width:100%;
`
const HeaderLogo = styled.img`
  
`
const HeaderLink = styled.a`
  padding: 3px;
  max-width: fit-content;
`
const Header = () => {

  return (
    <>
    <HeaderWrapper>
      <HeaderLink href="/"><HeaderLogo src={Logo} width ="40" height="29"></HeaderLogo> <img src={PodHarbour} height="29"></img></HeaderLink>
    </HeaderWrapper>
    </>
  )
}

export default Header;
