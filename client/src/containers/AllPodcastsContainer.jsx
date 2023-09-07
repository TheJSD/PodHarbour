import React from 'react'
import NavBar from '../components/NavBar'
import GridContainer from '../components/GridComponent'


const AllPodcastsContainer = ({podcasts, user}) => {

  if(!user && podcasts.length == 0) {
    return "Loading"
  }

  return (
    <>
    <div className="background">
    <NavBar/>
    <GridContainer podcasts={podcasts}/>
    </div>
    </>
  )
}

export default AllPodcastsContainer