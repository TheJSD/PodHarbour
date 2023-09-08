import React from 'react'
import NavBar from '../components/NavBar'
import GridComponent from '../components/GridComponent'

const DisplayPodcastsContainer = ({podcasts, titleText}) => {

  return (
    <>
    <GridComponent podcasts={podcasts} titleText={titleText}/>
    </>
  )
}

export default DisplayPodcastsContainer