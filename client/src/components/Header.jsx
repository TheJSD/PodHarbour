import React from 'react'
import styled from 'styled-components'
import Logo from '../local_images/Logo_Orange.png'

const HeaderWrapper = styled.header`
  background-color: #32334d;
  padding: 1px;
  display: flex;
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
      <HeaderLink href="/"><HeaderLogo src={Logo} width ="40" height="29"></HeaderLogo></HeaderLink>
    </HeaderWrapper>
    </>
  )
}

export default Header;
