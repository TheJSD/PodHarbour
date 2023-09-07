import React, { useEffect, useState } from 'react'
import AllPodcastsContainer from '../containers/AllPodcastsContainer'
import { getAllPodcasts } from '../services/PodcastsServices'

const AllPodcasts = () => {

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
    <AllPodcastsContainer podcasts={podcasts}/>
  )
}

export default AllPodcasts