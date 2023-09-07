const podcastsURL = "http://localhost:9000/api/podcasts"

export const getAllPodcasts = () => {
  return fetch(podcastsURL)
    .then(response => response.json())
}