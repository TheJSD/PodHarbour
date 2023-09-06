import { useEffect, useState } from 'react'
import './App.css'
import Hero from './assets/Hero.png'
import GridContainer from './components/GridContainer';
import Placeholder from './assets/150.png'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';
import PodcastContainer from './containers/PodcastContainer';
import AllPodcastsContainer from './containers/AllPodcastsContainer';

export const podcastsURL = "http://localhost:9000/api/podcasts"

function App() {

const [podcasts, setPodcasts] = useState([])
const [loading, setLoading] = useState(true);


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
        <Route path="/:id" element={<PodcastContainer/>}/> 
        <Route path="/all" element={<AllPodcastsContainer podcasts={podcasts} />}/>
        {/* NEED AN ID ROUTE FOR PodcastContainer */}
      </Route>

    </Routes>
  )
}

export default App