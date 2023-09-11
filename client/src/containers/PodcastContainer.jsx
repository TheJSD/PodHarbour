import "../App.css"
import EpisodesGrid from "../components/EpisodesGrid"
import { useParams, useLocation } from 'react-router-dom'
import { podcastsURL } from "../App"
import { useEffect, useState } from "react"
import styled from 'styled-components'
import { Button } from "../components/styles/Button.style"
import { FaYoutube, FaSnapchat, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export const usersURL = "http://localhost:9000/api/users/"

  const PodcastOuterWrapper = styled.div`
    display: flex;
    justify-content: center;
  `
  const SinglePodcastWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  line-height: 270%;
  text-align: center;
  width: 855px;
  height: 420px;
  background-color: #32334d77;
  color: #ffb834;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  `

  const PodcastImage = styled.img`
  float:left;
  height: 220px;
  width: 340px;
  border-radius: 10px;
  margin-top: 45px;
  margin-left: 20px;
  margin-right: 17px;
  `

  const Socials = styled.div`
  
  `
  
  const PodcastCreator = styled.h2`
  margin-bottom: 5px;`

  const PodcastDesc = styled.div`
  line-height: normal;
  text-align: left;
  margin-top: 10px;
  margin-left: 400px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: large;
  `

const ButtonUnsub = styled.button`
  color: #32334D;
  background-color: #FC984C;
  padding: 15px;
  width: 160px;
  margin-left: 5px;
  margin-right: 5px;
  font-weight: bold;
  text-decoration: none;
  border-color: #32334d;
  border-style: solid;
  border-radius: 10px;
  content: "Subscribed";
  &:hover {
      background-color: #32334dd7;
      color: #ffb834;
      transition: 0.8s;
      border-color: #32334d00;
      border-style: solid;
  }
  &:hover:before {
    content: "Unsubscribe";
  }
  &:before {
    content: "Subscribed";
  }`

  const PodcastContainer = () => {
    
    const { id } = useParams()

    const location = useLocation();
    const { podcastObject } = location.state;

    const [podcast, setPodcast] = useState()
    const [user, setUser] = useState()

    const fetchPodcast = async () => {
      const res = await fetch(`${podcastsURL}/${id}`)
      const data =  await res.json();
      setPodcast(data);
    }

    const fetchUser = async () => {
      const res = await fetch(usersURL)
      const data =  await res.json();
      setUser(data[0])
    }

    useEffect(() => {
      fetchPodcast()
      .then(() => fetchUser());
    }, [])
    
    const unsubscribe = () => {
      const updatedUser = { ...user }
      updatedUser.subscriptions = updatedUser.subscriptions.filter(id => id !== podcast._id);
      
      fetch(usersURL + user._id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user data');
        }
        setUser(updatedUser)
      })
      .then(updatedData => {
        console.log(updatedData);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
    }

    const subscribe = () => {
      const updatedUser = { ...user }
      updatedUser.subscriptions.push(podcast._id)
      
      fetch(usersURL + user._id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user data');
        }
        setUser(updatedUser)
      })
      .then(updatedData => {
        console.log(updatedData);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  
};

  return (
    <>
    {user ? 
    <>
    <PodcastOuterWrapper>
    <SinglePodcastWrapper>
    <PodcastImage src={`assets/podcast_images/${podcast.image}.png`}  alt={podcast.name}></PodcastImage><br />
      <h1>{podcast.name}</h1>
            <h3>Genre: {podcast.genre}</h3>
      <PodcastCreator><i>Creator: {podcast.author}</i></PodcastCreator>
      {(user.subscriptions.find((id) => id === podcast._id)) ? <ButtonUnsub onClick={unsubscribe}></ButtonUnsub>  : <Button onClick={subscribe}>Subscribe</Button> }
      <Socials>Find us on all of our Socials here:<FaYoutube /><FaXTwitter /><FaInstagram /><FaSnapchat /></Socials>
    <PodcastDesc>{podcast.description}</PodcastDesc>
    </SinglePodcastWrapper>
    </PodcastOuterWrapper>
            <EpisodesGrid episodes = {podcast.episodes}/></>
  : "Loading"}
  </>)
}
export default PodcastContainer
