import React from 'react'
import { useState } from 'react'
import Placeholder from '../assets/150.png'
import NavBar from '../components/NavBar';
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header'

const HomeContainer = ({podcasts, loading}) => {

  const [caroDisp, setDispArray] = useState(5)
  const [caroMax, setCaroMax] = useState(5);
  const [caroMin, setCaroMin] = useState(0);
  const [trigger, setTrigger] = useState(1)

  if (podcasts.length && trigger === 1) {setDispArray(podcasts.slice(caroMin, caroMax)); setTrigger(0)} else null


  const nextCaro = (e) => {
    setCaroMax(caroMax + 1); setCaroMin(caroMin +1); setTrigger(1)
  }
  
  const prevCaro = (e) => {
    setCaroMax(caroMax -1); setCaroMin(caroMin -1); setTrigger(1)
  }


  const Carousel = () => { 
    return(
    <>
    <div className="podcast-list">
    <ul>
    {caroMax <= 6 ? null : <button onClick={prevCaro}className="button-caro">&#8678;</button>}
    {caroDisp.length ? caroDisp.map((podcast, index) =>
    <li className="podcast"
    ><div className="podcast-box">
    <img className="podcast-img" src={Placeholder}></img><br />
    <b><Link to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.name}</Link></b><br />
    <i>{podcast.author}</i></div><br /></li>) : "loading"}
    {caroDisp.length === 5 ? <button onClick={nextCaro}className="button-caro">&#8680;</button> : null}
    </ul>
    </div>
    </>)
    }

  return (
    <>
    <NavBar />
    <Header />
    <HeroBanner />
    <Carousel />
    <footer>
    </footer>
    </>
  )
}

export default HomeContainer
