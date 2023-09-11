import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const PodcastOuter = styled.div`
margin-top: 20px;
text-align:left;
display: flex;
justify-content: center;
::-webkit-scrollbar-thumb {
    background-color: #ffb834; 
    border-radius: 5px; 
}
::-webkit-scrollbar-track {
    background-color: #32334d;
}
::-webkit-scrollbar:horizontal {
    height: 10px; 
}
`

const End = styled.div`
padding-left: 20px;
`

const Featured = styled.h2`
padding: 15px;
color: #ffb834;
margin-left: 10px;
position: absolute;
`

const PodcastList = styled.div`
list-style: none;
height: 230px;
width: 980px;
overflow-x: scroll;
overflow-y: hidden; 
padding-bottom: 25px;
background-color: #32334d77;
border-radius: 15px;
`

const Listouter = styled.ul`
justify-content: center;
width: 200px;
margin-top: 50px;
display: flex;
justify-content: left;
`

const Podcast = styled.li`
padding: 15px;
list-style: none;
background-color: #32334dd7;
width: 150px;
height: 150px;
color: #ffb834;
margin-left: 20px;
text-align: left;
font-size: small;
border-radius: 20px;
box-shadow: 7px 7px #0000003f;
`

const PodcastTitle = styled.section`
text-align: center;`

const PodcastImg = styled.img`
height: auto;
width: 150px;
border-radius: 10px;`


    const Carousel = ({podcasts}) => { 
    
    return(
    <>
    <PodcastOuter>
    <PodcastList>
    <Featured>Featured Podcasts:</Featured>
    <Listouter>
    {podcasts.length ? podcasts.map((podcast, index) =>
    <Podcast key={podcast._id}>
    <PodcastTitle>
    <Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}><PodcastImg src={`assets/podcast_images/${podcast.image}.png`} alt={podcast.name}></PodcastImg></Link><br />
    <b><Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.name}</Link></b><br />
    <i><Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.author}</Link></i></PodcastTitle><br /></Podcast>) : "loading"}<End></End>
    </Listouter>
    </PodcastList>
    </PodcastOuter>
    </>)
    }

export default Carousel