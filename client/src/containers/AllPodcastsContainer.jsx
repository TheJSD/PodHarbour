import React from 'react'
import NavBar from '../components/NavBar'
import GridComponent from '../components/GridComponent'



const AllPodcastsContainer = ({podcasts}) => {

  return (
    <>
    <div className="background">
    <NavBar/>
    <GridComponent podcasts={podcasts}/>
    </div>
    </>
  )
}

export default AllPodcastsContainer