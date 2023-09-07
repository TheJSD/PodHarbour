import React, { useEffect, useState } from 'react'
import DisplayPodcastsContainer from '../containers/DisplayPodcastsContainer'
import { getAllPodcasts } from '../services/PodcastsServices'
import { getAllUsers } from '../services/UserServices'



const SubscribedPodcastsPage = () => {

  const [podcasts, setPodcasts] = useState([])
  const [subscribedPodcasts, setSubscribedPodcasts] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchPodcasts()
    fetchUser()
  }, [])

  useEffect(() => {
    if (user) {
      const subscribedList = podcasts.filter((podcast) => {
        if (user.subscriptions.indexOf(podcast._id) > -1) {
        return podcast}
        })
      setSubscribedPodcasts(subscribedList)
    }
  }, [user, podcasts])
  

  const fetchPodcasts = () => {
    getAllPodcasts()
    .then(data => setPodcasts(data));
  }  
  const fetchUser = () => {
    getAllUsers()
    .then(data => setUser(data[0]))
  }
  

  return (
    <>
      {!subscribedPodcasts ? (
        <h1>LOADING</h1>
      ) : ( 
        <>
        <DisplayPodcastsContainer podcasts = {subscribedPodcasts} titleText={'Subscribed Podcasts'}/>
        </>
      )}
    </>
  )
}

export default SubscribedPodcastsPage