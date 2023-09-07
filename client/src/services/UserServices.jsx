const podcastsURL = "http://localhost:9000/api/users"

export const getAllUsers = () => {
  return fetch(podcastsURL)
    .then(response => response.json())
}