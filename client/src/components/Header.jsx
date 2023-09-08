import React from 'react'
import styled from 'styled-components'
import Logo from '../local_images/Logo_Orange.png'

const HeaderWrapper = styled.header`
  background-color: #32334dd7;
  padding: 5px;
  display: flex;
  justify-content: end;
  position: fixed;
  top: 0%;
  width:100%;
`
const HeaderLogo = styled.img`
  
`
const HeaderLink = styled.a`
  
  max-width: fit-content;
`
const Header = () => {

  return (
    <>
    <HeaderWrapper>
      <HeaderLink href="/"><HeaderLogo src={Logo} width ="50" height="40"></HeaderLogo></HeaderLink>
    </HeaderWrapper>
    </>
  )
}

export default Header;
