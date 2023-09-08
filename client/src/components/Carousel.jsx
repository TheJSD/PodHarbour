import React from 'react'
import styled from 'styled-components'
import Placeholder from '../local_images/150.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const PodcastOuter = styled.section`
display: flex;
justify-content: center;
align-items: center;
`

const PodcastList = styled.section`
  margin-right: 15px;
  justify-content: left;
  list-style: none;
  height: 230px;
  width: 1000px;
  overflow-x: scroll;`
    




const Podcast = styled.li`
padding: 15px;
list-style: none;
background-color: #32334dd7;
width: 150px;
height: 150px;
color: #ffb834;
margin-top: 20px;
margin-left: 20px;
text-align: left;
font-size: small;
border-radius: 20px;
`

const PodcastTitle = styled.section`
text-align: center;`

const PodcastImg = styled.img`
height: auto;
width: 150px;
border-radius: 10px;`

const PodcastButton = styled.button`
background-color: #32334d00;
color: #32334dd7;
padding: 5px;
font-weight: bold;
text-decoration: none;
border-color: #32334d00;
border-style: solid;
font-size: xx-large;
&:hover {
    color: #FC984C;
    transition: 0.8s;
}
`
const Rotate = styled.section`
    transform: rotate(-180deg);
` 

const Carousel = ({podcasts}) => { 

    const [caroDisp, setDispArray] = useState(5);
    const [caroMax, setCaroMax] = useState(5);
    const [caroMin, setCaroMin] = useState(0);
    const [trigger, setTrigger] = useState(1);


    // if (podcasts.length && trigger === 1) {setDispArray(podcasts.slice(caroMin, caroMax)); setTrigger(0)} else null


    // const nextCaro = (e) => {
    // setCaroMax(caroMax + 1); setCaroMin(caroMin +1); setTrigger(1)
    // }

    // const prevCaro = (e) => {
    // setCaroMax(caroMax -1); setCaroMin(caroMin -1); setTrigger(1)
    // }
    
    return(
    <>
    <PodcastOuter>
    <PodcastList>
    <ul>
    {/* {caroMax <= 6 ? null : <PodcastButton onClick={prevCaro}><Rotate>➤</Rotate></PodcastButton>} */}
    {podcasts.length ? podcasts.map((podcast, index) =>
    <Podcast key={podcast._id}>
    <PodcastTitle>
    <Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}><PodcastImg src={`assets/podcast_images/${podcast.image}.png`} alt={Placeholder}></PodcastImg></Link><br />
    <b><Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.name}</Link></b><br />
    <i><Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.author}</Link></i></PodcastTitle><br /></Podcast>) : "loading"}
    {/* {caroDisp.length === 5 ? <PodcastButton onClick={nextCaro}>➤</PodcastButton> : null } */}
    </ul>
    </PodcastList>
    </PodcastOuter>
    </>)
    }

export default Carousel