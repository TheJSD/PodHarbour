import React from 'react'
import styled from 'styled-components'
import Placeholder from '../local_images/150.png'
import { Routes, Route, Outlet, Link } from 'react-router-dom'


const ItemWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:220px;
  height:250px;
  background-color:#32334dd7;
  color: #FC984C;
  font-size:small;
  border-radius: 20px;
  gap:0.5rem;
  align-items:center;
  padding: 5px;
`

const PodcastImage = styled.img`
  height:auto;
  width: 200px;
  border-radius:10px;
  margin-bottom: 10px;
  margin-top: 20px;
` 
const PodcastTitle = styled.p`
  text-align:center;
  margin:0;
  font-weight:bold;
  padding-bottom: 5px;
  max-width:180px;
`
const PodcastAuthor = styled.p`
  text-align:center;
  margin:0;
  font-style:italic;
  max-width:180px;
`

const GridItem = ({podcast}) => {

  return (
    <Link style={{textDecoration: 'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>
    <ItemWrapper>
        <PodcastImage src={`assets/podcast_images/${podcast.image}.png`} alt={Placeholder}/>
        <PodcastTitle>
          {podcast.name}
        </PodcastTitle>
        <PodcastAuthor>{podcast.author}</PodcastAuthor>
    </ItemWrapper>
    </Link>
  )
}

export default GridItem