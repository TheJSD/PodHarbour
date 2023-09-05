import React from 'react'
import styled from 'styled-components'

const GridItem = ({podcast}) => {

    const GridWrapper = styled.div`
        display:flex;
        width:150px;
        height:150px;
    `

    const PodcastImage = styled.img`
    height:120px;
    width: 150px;
    ` 
    const PodcastTitle = styled.h3`
    font-weight: bold;
    `
    const PodcastAuthor = styled.h2`
    font-weight: bold;
    `

  return (
    <GridWrapper>
        <PodcastImage src={podcast.image}/>
        <PodcastTitle>{podcast.title}</PodcastTitle>
        <PodcastAuthor>{podcast.author}</PodcastAuthor>
    </GridWrapper>
  )
}

export default GridItem