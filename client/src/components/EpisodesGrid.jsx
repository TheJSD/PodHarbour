import React from 'react'
import EpisodeItem from './EpisodeItem'
import styled from 'styled-components'

const OuterEpisode = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-direction: column;
  align-items: center;
  `


const EpisodesGrid = ({episodes}) => {

  console.log ("loaded")
    const gridItems = episodes.map((episode) => 
    {return <EpisodeItem episode={episode}/>}
    )

  return (
    <>
    <OuterEpisode>
    {gridItems}
    </OuterEpisode>
    </>
  )
}

export default EpisodesGrid