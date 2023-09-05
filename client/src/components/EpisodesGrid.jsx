import React from 'react'
import EpisodeItem from '../components/EpisodeItem'

const GridContainer = ({episodes}) => {

    const gridItems = episodes.map((episode) => 
    {return <EpisodeItem episode={episode}/>}
    )

  return (
    <>
    {gridItems}
    </>
  )
}

export default GridContainer