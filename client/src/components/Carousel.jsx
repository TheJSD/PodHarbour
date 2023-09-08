import React from 'react'
import styled from 'styled-components'
import Placeholder from '../assets/150.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

    const PodcastOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* Style the horizontal scrollbar */
    ::-webkit-scrollbar {
        width: 15px; /* Adjust the width as needed */
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ffb834; /* Change this to your desired scrollbar thumb color */
        border-radius: 5px; /* Optional: Add some border radius for a rounded look */
    }

    ::-webkit-scrollbar-track {
        background-color: #32334d; /* Change this to your desired scrollbar track color */
    }

    /* Style the horizontal scrollbar */
    ::-webkit-scrollbar:horizontal {
        height: 10px; /* Adjust the height as needed */
    }
    `

    const PodcastList = styled.section`
    margin-left: 170px;
    margin-right: 170px;
    justify-content: left;
    list-style: none;
    height: 230px;
    overflow-x: scroll;
    overflow-y: hidden; 
    `

    const Listouter = styled.ul`
    margin-left: 850px;
    display: flex;
    justify-content: center;
    `

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
    border-radius: 20px;`

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
    <Listouter>
    {/* {caroMax <= 6 ? null : <PodcastButton onClick={prevCaro}><Rotate>➤</Rotate></PodcastButton>} */}
    {podcasts.length ? podcasts.map((podcast, index) =>
    <Podcast key={podcast._id}>
    <PodcastTitle>
    <Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}><PodcastImg src={Placeholder}></PodcastImg></Link><br />
    <b><Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.name}</Link></b><br />
    <i><Link style={{textDecoration:'none', color:'inherit'}} to={`/${podcast._id}`} state={{podcastObject: podcast}}>{podcast.author}</Link></i></PodcastTitle><br /></Podcast>) : "loading"}
    {/* {caroDisp.length === 5 ? <PodcastButton onClick={nextCaro}>➤</PodcastButton> : null } */}
    </Listouter>
    </PodcastList>
    </PodcastOuter>
    </>)
    }

export default Carousel