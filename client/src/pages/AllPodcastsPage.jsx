import React, { useEffect, useState } from 'react'
import AllPodcastsContainer from '../containers/DisplayPodcastsContainer'
import { getAllPodcasts } from '../services/PodcastsServices'

const AllPodcastsPage = () => {

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

export default AllPodcastsPage