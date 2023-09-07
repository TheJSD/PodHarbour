import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import GridComponent from '../components/GridComponent'



const DisplayPodcastsContainer = ({podcasts}) => {

  return (
    <>
    <div className="background">
    <NavBar/>
    <GridComponent podcasts={podcasts}/>
    </div>
    </>
  )
}

export default DisplayPodcastsContainer