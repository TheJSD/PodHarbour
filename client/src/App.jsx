import { useEffect, useState } from 'react'
import './App.css'
import Hero from './assets/Hero.png'
import GridContainer from './containers/GridContainer';
import Placeholder from './assets/150.png'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';

function App() {

const [podcasts, setPodcasts] = useState([])
const [loading, setLoading] = useState(true);

const podcastsURL = "http://localhost:9000/api/podcasts"

useEffect(() => {
  fetchPodcasts()
}, [])

const fetchPodcasts = () => {
  fetch(podcastsURL)
  .then(response => response.json())
  .then(data => setPodcasts(data))
  .then(() => setLoading(false));
}  


  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomeContainer podcasts={podcasts}/>}/>
      </Route>

    </Routes>

  // <>
  // <nav className="nav">
  //   <button className="button-small">All Podcasts</button><br />
  //   <button className="button-small">Saved Podcasts</button><br />
  //   <button className="button-small">Help</button><br />
  // </nav>

  // <div className="backround">
  //   <div className="hero-container">
  //     <div className="hero">
  //     <img className="hero-picture" src={Hero}></img>
  //     <h2>Welcome to PodHarbour!</h2>
  //     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  //     <div className="button-outer">
  //     <button className="button-small-hero">Test Button</button><button className="button-small-hero">Test Button</button>
  //     </div>
  //     </div>
  //     </div>
  //   <Carousel />
  // </div>
  // <footer>
  // {caroArray}
  // </footer>
  // </>
  )
}

export default App