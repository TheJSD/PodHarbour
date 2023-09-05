import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/150.png'

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
    const EpisodeImage = styled.img`
     /* height:150px; */
    height:auto;
    width: 210px;
    border-radius:10px;
    `

const EpisodeItem = ({episode}) => {


  return (
    <GridWrapper>
        <EpisodeImage src={placeholder}></EpisodeImage>
        <EpisodeTitle>{episode.title}</EpisodeTitle>
        <EpisodeDescription>{episode.description}</EpisodeDescription>
    </GridWrapper>
  )
}

export default EpisodeItem