import './App.css'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './pages/HomePage';
import AllPodcasts from './pages/AllPodcastsPage';
import PodcastPage from './pages/PodcastPage';
import SubscribedPodcastsPage from './pages/SubscribedPodcastsPage';
import Layout from './components/Layout'

export const podcastsURL = "http://localhost:9000/api/podcasts"
const usersURL = "http://localhost:9000/api/users"

function App() {



  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='all' element={<AllPodcasts/>}/>
          <Route path="/:id" element={<PodcastPage/>}/> 
          <Route path="/subscribed" element={<SubscribedPodcastsPage/>}/> 
          {/* <Route path="/all" element={<AllPodcastsContainer podcasts={podcasts} />}/> */}
        </Route>
      </Routes>
  )
}

export default App