import React, { useEffect, useState } from 'react'
import HomeContainer from '../containers/HomeContainer'
import { getAllPodcasts } from '../services/PodcastsServices'

const HomePage = () => {

  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    fetchPodcasts()
  }, [])

  const fetchPodcasts = () => {
    getAllPodcasts()
    .then(data => setPodcasts(data))
  }  

  return (
    <HomeContainer podcasts={podcasts}/>
  )
}

export default HomePage