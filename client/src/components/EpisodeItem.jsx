import React from 'react'
import styled from 'styled-components'

const EpisodeItem = ({episode}) => {

    const GridWrapper = styled.div`
        display:flex;
        width:150px;
        height:150px;
    `
    const EpisodeTitle = styled.h3`
    font-weight: bold;
    `
    const EpisodeDescription = styled.h2`
    font-weight: bold;
    `

  return (
    <GridWrapper>
        <PodcastImage>src={podcast.image}</PodcastImage>
        <EpisodeTitle>{episode.title}</EpisodeTitle>
        <EpisodeDescription>{episode.description}</EpisodeDescription>
    </GridWrapper>
  )
}

export default EpisodeItem