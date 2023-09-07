import React from 'react'
import styled from 'styled-components'
import placeholder from '../assets/150.png'

    const Episode = styled.li`
    padding: 1%;
    list-style: none;
    background-color: #32334dd7;
    width: 150px;
    height: auto;
    color: #ffb834;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 0.5%;
    text-align: left;
    font-size: small;
    border-radius: 20px;`
    
    const EpisodeTitle = styled.section`
    text-align: center;`
    
    const EpisodeImage = styled.img`
     /* height:150px; */
    height: auto;
    width: 150px;
    border-radius: 10px;`

const EpisodeItem = ({episode}) => {


  return (
      <Episode>
        <EpisodeImage src={placeholder}></EpisodeImage>
          <EpisodeTitle><b>{episode.title}</b></EpisodeTitle><br/>
        <div>{episode.description}</div>
      </Episode>
  )
}

export default EpisodeItem