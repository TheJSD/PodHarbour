import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import GridComponent from '../components/GridComponent'



const DisplayPodcastsContainer = ({podcasts, titleText}) => {

  return (
    <>
    <div className="background">
    <NavBar/>
    <GridComponent podcasts={podcasts} titleText={titleText}/>
    </div>
    </>
  )
}

export default DisplayPodcastsContainer