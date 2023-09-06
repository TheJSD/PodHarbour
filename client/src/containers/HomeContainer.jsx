import React from 'react'
import { useState } from 'react'
import Hero from '../assets/Hero.png'
import Placeholder from '../assets/150.png'
import NavBar from '../components/NavBar';
import { Routes, Route, Outlet, Link } from 'react-router-dom'

const HomeContainer = ({podcasts, loading}) => {

  const [caroArray, setCaroArray] = useState(0);
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
    <NavBar/>
    <div className="backround">
      <div className="hero-container">
        <div className="hero">
        <img className="hero-picture" src={Hero}></img>
        <h2>Welcome to PodHarbour!</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className="button-outer">
        <button className="button-small-hero">Test Button</button><button className="button-small-hero">Test Button</button>
        </div>
        </div>
        </div>
      <Carousel />
    </div>
    <footer>
    </footer>
    </>
  )
}

export default HomeContainer

// {loading == false && (<PodcastContainer podcast = {podcasts[0]}/>)}
  
{/*

<NavBar/>
<div className="backround">
  <div className="hero-container">
    <div className="hero">
    <img className="hero-picture" src={Hero}></img>
    <h2>Welcome to PodHarbour!</h2>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <div className="button-outer">
    <button className="button-small-hero">Test Button</button><button className="button-small-hero">Test Button</button>
    </div>
    </div>
    </div>
  <Carousel />
</div>
<footer>
{caroArray}
</footer> */}