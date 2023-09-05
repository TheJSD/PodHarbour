import { useEffect, useState } from 'react'
import './App.css'
import Hero from './assets/Hero.png'
import GridContainer from './containers/GridContainer';
import Placeholder from './assets/150.png'

function App() {

// const [caroArray, setCaroArray] = useState(0);
const [podcasts, setPodcasts] = useState([]);
const [loading, setLoading] = useState(true);
// const [caroDisp, setDispArray] = useState(5)
// const [caroMax, setCaroMax] = useState(5);
// const [caroMin, setCaroMin] = useState(0);

const podcastsURL = "http://localhost:9000/api/podcasts/"

useEffect(() => {
  fetchPodcasts()
}, [])

const fetchPodcasts = () => {
  fetch(podcastsURL)
  .then(response => response.json())
  .then(data => setPodcasts(data)); setLoading(false)
}  

// const setDisp = setDispArray(podcasts.slice(caroMin, caroMax))

// const nextCaro = (e) => {
//   setCaroMax(caroMin + 5)
// }

// const prevCaro = (e) => {
//   setDispArray(caroDisp -5)
// }

const Carousel = () => { 
  return(
  <>
  <div className="podcast-list">
  <ul>
  <button onClick={null}className="button-caro">-</button>
  {podcasts.map((podcast, index) => index < 5 &&
  <li className="podcast"
  ><div className="podcast-box">
  <img className="podcast-img" src={Placeholder}></img><br />
  <b>{podcast.name}</b><br />
  <i>{podcast.author}</i></div><br /></li>)}
  <button onClick={null}className="button-caro">+</button>
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

export default App
