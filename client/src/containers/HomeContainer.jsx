import React from 'react'
import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header'
import Carousel from "../components/Carousel"


const HomeContainer = ({podcasts}) => {

  return (
    <>
    <HeroBanner />
      <Carousel podcasts={podcasts}/>
    <footer>
    </footer>
    </>
  )
}

export default HomeContainer
