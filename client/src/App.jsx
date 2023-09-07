import { useEffect, useState } from 'react'
import './App.css'
import Hero from './assets/Hero.png'
import GridContainer from './components/GridComponent';
import Placeholder from './assets/150.png'
import { Routes, Route, Outlet, Link, BrowserRouter } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';
import PodcastContainer from './containers/PodcastContainer';
import AllPodcastsContainer from './containers/DisplayPodcastsContainer';
import Home from './pages/HomePage';
import AllPodcasts from './pages/AllPodcastsPage';
import PodcastPage from './pages/PodcastPage';

export const podcastsURL = "http://localhost:9000/api/podcasts"

function App() {

// const [podcasts, setPodcasts] = useState([])
// const [loading, setLoading] = useState(true);


// useEffect(() => {
//   fetchPodcasts()
// }, [])

// const fetchPodcasts = () => {
//   fetch(podcastsURL)
//   .then(response => response.json())
//   .then(data => setPodcasts(data))
//   .then(() => setLoading(false));
// }  

  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path='all' element={<AllPodcasts/>}/>
          <Route path="/:id" element={<PodcastPage/>}/> 
          {/* <Route path="/all" element={<AllPodcastsContainer podcasts={podcasts} />}/> */}
        </Route>
      </Routes>
  )
}

export default App