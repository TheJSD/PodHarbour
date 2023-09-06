import React from 'react'
import EpisodeItem from '../components/EpisodeItem'
import { FlexContainer } from './styles/FlexContainer.style';


const EpisodesGrid = ({episodes}) => {

  console.log (episodes)
    const gridItems = episodes.map((episode) => 
    {return <EpisodeItem episode={episode}/>}
    )

  return (
    <FlexContainer>
    {gridItems}
    </FlexContainer>
  )
}

export default EpisodesGrid