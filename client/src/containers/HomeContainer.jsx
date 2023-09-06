import React from 'react'
import { useState } from 'react'
import Placeholder from '../assets/150.png'
import NavBar from '../components/NavBar';
import { Routes, Route, Outlet, Link } from 'react-router-dom'
// import { HeroContainer } from '../components/styles/HeroContainer.style';
import { Button } from '../components/styles/Button.style'
import styled from 'styled-components'
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header'
import Carousel from "../components/Carousel"


const HomeContainer = ({podcasts, loading}) => {

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
