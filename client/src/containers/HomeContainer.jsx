import React from 'react'
import { useState } from 'react'
import Hero from '../assets/Hero.png'
import Placeholder from '../assets/150.png'
import NavBar from '../components/NavBar';
import { Routes, Route, Outlet, Link } from 'react-router-dom'

const HomeContainer = ({podcasts, loading}) => {

  const [caroArray, setCaroArray] = useState(0);

  const nextCaro = (e) => {
  setCaroArray(caroArray +5)
}

const prevCaro = (e) => {
  setCaroArray(caroArray -5)
}

const Carousel = () => { 
  return(
  <>
  <div className="podcast-list">
  <ul>
  <button onClick={prevCaro}className="button-caro">-</button>
  {podcasts.map((podcast, index) => <li className="podcast"
  ><div className="podcast-box">
  <img className="podcast-img" src={Placeholder}></img><br />
  <b><Link to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.name}</Link></b><br />
  <i>{podcast.author}</i></div><br /></li>)}
  <button onClick={nextCaro}className="button-caro">+</button>
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
    {caroArray}
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