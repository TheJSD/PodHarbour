import { useEffect, useState } from 'react'
import './App.css'
import Hero from './assets/Hero.png'
import GridContainer from './containers/GridContainer';
import Placeholder from './assets/150.png'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';
import PodcastContainer from './containers/PodcastContainer';

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
        <Route index element={<HomeContainer podcasts={podcasts} loading={loading}/>}/>
        {/* <Route path="/:id" element={<PodcastContainer/>}/>  // WILL NEED TO UPDATE THIS */}
        {/* <Route path="/all" element={NEED CONTAINER}/> */}
        {/* NEED AN ID ROUTE FOR PodcastContainer */}
      </Route>

    </Routes>
  )
}

export default App