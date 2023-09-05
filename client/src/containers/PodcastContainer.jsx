import "../App.css"
import EpisodesGrid from "../components/EpisodesGrid"

  const PodcastContainer = ({podcast}) => {
  
    
  return (
    <div className="background">
    {/* <Nav/> */}
    <div className="podcast-container">
      <h1>{podcast.name}</h1>
      <h2>{podcast.author}</h2>
      <h4>{podcast.genre}</h4>
      <button className="button-small">Subscribe</button>
      <p>{podcast.description}</p>
    </div>
    <div className="episode-list">
      <ul>
        <EpisodesGrid episodes = {podcast.episodes}/>
      </ul>
    </div>
    </div>
  )
}
export default PodcastContainer