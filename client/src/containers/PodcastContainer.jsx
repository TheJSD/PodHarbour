import "../App.css"
import EpisodesGrid from "../components/EpisodesGrid"
import NavBar from "../components/NavBar"
import Placeholder from '../assets/150.png'
import { useParams, useLocation } from 'react-router-dom'
import { podcastsURL } from "../App"
import { useEffect, useState } from "react"
import styled from 'styled-components'
import { Button } from "../components/styles/Button.style"

export const usersURL = "http://localhost:9000/api/users/"

  const EpisodeOuterWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2%;
  `

  const EpisodeWrapper = styled.div`
  line-height: 250%;
  margin-top: 30px;
  text-align: center;
  padding-right: 1%;
  padding-bottom: 3%;
  padding-left: 0.5%;
  width: 800px;
  height: 400px;
  background-color: #32334d77;
  color: #ffb834;
  padding-right: 50px;
  border-radius: 15px;
  margin-bottom: 16px;
  `
  const EpisodeImage = styled.img`
  float:left;
  height:auto;
  width: 240px;
  border-radius:10px;
  margin-top: 50px;
  margin-left: 5%;
  `

  const EpisodeDesc = styled.div`
  line-height: normal;
  text-align: left;
  margin-top: 15px;
  margin-left: 10px;
  `

  const PodcastContainer = () => {
    
    const { id } = useParams()

    const location = useLocation();
    const { podcastObject } = location.state;

    const [podcast, setPodcast] = useState()
    const [user, setUser] = useState()
    const [check, setCheck] = useState("")
    const [loading, setLoading] = useState(true)  

    const fetchPodcast = async () => {
      const res = await fetch(`${podcastsURL}/${id}`)
      const data =  await res.json();
      setPodcast(data);
    }

    const fetchUser= async () => {
      const res = await fetch(usersURL)
      const data =  await res.json();
      setUser(data[0])
    }

    useEffect(() => {
      fetchPodcast()
      .then(() => setLoading(false))
      .then(() => fetchUser());
    }, [])
    
    console.log(user)

    const subscribed = () => {user.subscriptions.find((id) => id === podcast._id) {
    };

    const subscribe = () => {
    setCheck(String(podcast._id));
    console.log(check)
    setUser(previous => {
    const shallowCopy = { ...previous };
    shallowCopy.subscriptions = [podcast._id, ...shallowCopy.subscriptions];
    return shallowCopy;
    });

      // let preserve = users._id
      // usersURL + === "Yes" ? booking.checkedin = "No" : booking.checkedin = "Yes"
      // delete booking._id
      // const customerInfo = customerUpdate[index].id
      // fetch(usersURL, {
      // method: "PUT",
      // headers: {"Content-Type": "application/json"},
      // body: JSON.stringify(user)
      // });
  };




  return (
    <>
    <NavBar/>
    {user ? 
    <>
    <EpisodeOuterWrapper>
    <EpisodeWrapper>
    <EpisodeImage src={Placeholder}></EpisodeImage><br />
      <h1>{podcast.name}</h1>
            {podcast.genre}
      <i><h2>{podcast.author}</h2></i>
      <Button onClick={subscribe}>Subscribe</Button><br />
      <h2>Subscribed? {user.subscriptions === podcast._id ? "Yes" : "No"}</h2>
    <EpisodeDesc>{podcast.description}</EpisodeDesc>
    </EpisodeWrapper>
    </EpisodeOuterWrapper>
            <EpisodesGrid episodes = {podcast.episodes}/></>
  : "Loading"}
  </>)
}
export default PodcastContainer