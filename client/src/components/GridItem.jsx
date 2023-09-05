import React from 'react'
import styled from 'styled-components'

const GridItem = ({podcast}) => {

    const GridWrapper = styled.div`
        display:flex;
        flex-direction:column;
        width:210px;
        height:210px;
        background-color:#32334dd7;
        color: #FC984C;
        font-size:small;
        border-radius: 20px;
    `

    const PodcastImage = styled.img`
    /* height:150px; */
    height:auto;
    width: 210px;
    border-radius:10px;
    ` 
    const PodcastTitle = styled.p`
    text-align:center;
    margin:0;
    font-weight:bold;
    padding-bottom: 5px;
    `
    const PodcastAuthor = styled.p`
    text-align:center;
    margin:0;
    font-style:italic;
    `

  return (
    <GridWrapper>
        <PodcastImage src={podcast.image}/>
        <PodcastTitle>{podcast.name}</PodcastTitle>
        <PodcastAuthor>{podcast.author}</PodcastAuthor>
    </GridWrapper>
  )
}

export default GridItem