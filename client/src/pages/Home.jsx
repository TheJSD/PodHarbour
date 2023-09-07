import React, { useEffect, useState } from 'react'
import HomeContainer from '../containers/HomeContainer'
// import { fetchPodcasts } from '../services/PodcastsServices'
import { getAllPodcasts } from '../services/PodcastsServices'

const Home = () => {

  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    fetchPodcasts()
  }, [])

  const fetchPodcasts = () => {
    getAllPodcasts()
    .then(data => setPodcasts(data))
    .then(() => setLoading(false));
  }  

  return (
    <HomeContainer podcasts={podcasts}/>
  )
}

export default Home