import { useEffect, useState } from 'react'
import './App.css'
import Hero from './assets/Hero.png'

function App() {

const [caroArray, setCaroArray] = useState(0);
const [podcasts, setPodcasts] = useState([])
const [loading, setLoading] = useState(true);

const podcastsURL = "http://localhost:9000/api/podcasts"

useEffect(() => {
  fetchPodcasts()
}, [])

const fetchPodcasts = () => {
  fetch(podcastsURL)
  .then(response => response.json())
  .then(data => setPodcasts(data)); setLoading(false);
}  

const nextCaro = (e) => {
  setCaroArray(caroArray +5)
}

const prevCaro = (e) => {
  setCaroArray(caroArray -5)
}

const Carousel = () => { 
  return(
  <>
  <div className="episode-list">
  <ul>
  <button onClick={prevCaro}className="button-caro">-</button>
  <li className="episode">Episode 1</li>
  <li className="episode">Episode 2</li>
  <li className="episode">Episode 3</li>
  <li className="episode">Episode 4</li>
  <li className="episode">Episode 5</li><button onClick={nextCaro}className="button-caro">+</button>
  </ul>
  </div>
  </>)
  }

  return (
  <>
  <nav className="nav">
    <button className="button-small">All Podcasts</button><br />
    <button className="button-small">Saved Podcasts</button><br />
    <button className="button-small">Help</button><br />
  </nav>

  <div className="backround">
    <div className="Hero-container">
      <div className="Hero">
      <img className="Hero-picture" src={Hero}></img>
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

export default App
