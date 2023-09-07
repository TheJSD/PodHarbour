import React from 'react'
import EpisodeItem from '../components/EpisodeItem'
import { FlexContainer } from './styles/FlexContainer.style';
import styled from 'styled-components'

const OuterEpisode = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;`


const EpisodesGrid = ({episodes}) => {

  console.log (episodes)
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