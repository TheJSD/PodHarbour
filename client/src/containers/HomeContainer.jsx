import React from 'react'
import NavBar from '../components/NavBar';
// import { HeroContainer } from '../components/styles/HeroContainer.style';
import { Button } from '../components/styles/Button.style'
import styled from 'styled-components'
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header'
import Carousel from "../components/Carousel"


const HomeContainer = ({podcasts}) => {

  return (
    <>
    <NavBar />
    <Header />
    <HeroBanner />
      <Carousel podcasts={podcasts}/>
    <footer>
    </footer>
    </>
  )
}

export default HomeContainer
