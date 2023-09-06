import "../App.css"
import EpisodesGrid from "../components/EpisodesGrid"
import NavBar from "../components/NavBar"
import Placeholder from '../assets/150.png'
import { useParams, useLocation } from 'react-router-dom'
import { podcastsURL } from "../App"
import { useEffect, useState } from "react"
import styled from 'styled-components'

  const PodcastWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:300px;
    padding-top: 20px;
    padding-bottom: 5px;
    padding-left: 40px;
    padding-right: 20px;
    width: 800px;
    background-color: #32334d77;
    color: #ffb834;
    text-align: end;
    border-radius: 15px;
  `
  const PodcastImage = styled.img`
  height:auto;
  width: 240px;
  border-radius:10px;
  `

  const PodcastContainer = () => {
    
    const { id } = useParams()

    const location = useLocation();
    const { podcastObject } = location.state;

    const [podcast, setPodcast] = useState()
    const [loading, setLoading] = useState(true)  

    const fetchPodcast = async () => {
      const res = await fetch(`${podcastsURL}/${id}`)
      const data =  await res.json();
      setPodcast(data)
    }

    useEffect(() => {
      fetchPodcast().then(()=> {
        setLoading(false)})
    }, [])
    
  return (
    <>
    <NavBar/>
    {loading == false && (
    <div className="background">
    <PodcastWrapper>
    <PodcastImage src={Placeholder}></PodcastImage><br />
      <h1>{podcast.name}</h1>
      <h2>{podcast.author}</h2>
      <h4>{podcast.genre}</h4>
      <button className="button-small-hero">Subscribe</button>
      <p>{podcast.description}</p>
    </PodcastWrapper>
    <div className="episode-list">
      <ul>
        <EpisodesGrid episodes = {podcast.episodes}/>
      </ul>
    </div>
    </div>
  )}
  </>)
}
export default PodcastContainer