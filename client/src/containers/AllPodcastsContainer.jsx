import React from 'react'
import NavBar from '../components/NavBar'
import GridContainer from '../components/GridContainer'


const AllPodcastsContainer = ({podcasts}) => {

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