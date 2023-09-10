import React from 'react'
import styled from 'styled-components'

    const Episode = styled.li`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 15px;
    list-style: none;
    margin-right: 15px;
    margin-bottom: 20px;
    text-align: left;
    border-radius: 20px;
    width: 550px;
    height:auto;
    background-color:#32334dd7;
    color: #ffb834;
    font-size: medium;
    gap:0.5rem;`
    
    const EpisodeTitle = styled.section`
    text-align: center;
    font-size: large;`
    
    const EpisodeImage = styled.img`
    height: 150px;
    width: 210px;
    border-radius:10px;
    margin-bottom: 10px;
    padding: 15px;
    margin-top: 2px;`

  const EpisodeWrapper = styled.div`
  display: flex;
  justify-items: flex-end;
  `

    const AudioPlayer = styled.audio`
    margin-top: 10px;
    width: 300px;
    `

const EpisodeItem = ({episode}) => {


  return (
      <Episode>
        <EpisodeWrapper>
        <EpisodeImage src={`assets/podcast_images/${episode.image}.png`}></EpisodeImage>
          <div>
            <EpisodeTitle><b>{episode.title}</b></EpisodeTitle><br/>
            <div>{episode.description}</div>
          </div>
        </EpisodeWrapper>
        <AudioPlayer controls src={`../../assets/podcast_audio/${episode.audio}.mp3`}/>
      </Episode>
  )
}

export default EpisodeItem