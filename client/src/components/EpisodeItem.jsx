import React from 'react'
import styled from 'styled-components'

    const Episode = styled.li`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    list-style: none;
    background-color: #32334dd7;
    width: 200px;
    height: 235px;
    color: #ffb834;
    margin-right: 15px;
    margin-bottom: 20px;
    text-align: left;
    font-size: small;
    border-radius: 20px;`

  //     display:flex;
  // flex-direction:column;
  // width:220px;
  // height:250px;
  // background-color:#32334dd7;
  // color: #ffb834;
  // font-size:small;
  // border-radius: 20px;
  // gap:0.5rem;
  // align-items:center;
  // padding: 5px;
    
    const EpisodeTitle = styled.section`
    text-align: center;`
    
    const EpisodeImage = styled.img`
    height:auto;
    width: 200px;
    border-radius:10px;
    margin-bottom: 10px;
    margin-top: 2px;`

    const AudioPlayer = styled.audio`
    width: 220px;
    `

const EpisodeItem = ({episode}) => {


  return (
      <Episode>
        <EpisodeImage src={`assets/podcast_images/${episode.image}.png`}></EpisodeImage>
          <EpisodeTitle><b>{episode.title}</b></EpisodeTitle><br/>
        <div>{episode.description}</div>
        <AudioPlayer controls src={`../../assets/podcast_audio/${episode.audio}.mp3`}/>
      </Episode>
  )
}

export default EpisodeItem