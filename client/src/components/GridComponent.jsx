import React, { useState } from 'react'
import GridItem from './GridItem'
import styled from 'styled-components'


const FlexContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:1rem;
    justify-content: center;
    padding-left: 100px;
    padding-top: 20px;
`

const Title = styled.h1`
  text-align:center;
  color: #32334D;
  font-size: 50px;
  padding-left:100px;
`

const SearchBar = styled.input`
  padding: 5px;
  margin: 5px;
  border:0;
  border-radius:10px;
  box-shadow: 0 0 2px 2px #32334D;
  background-color: #484a71;
  color: #FC984C;
  &&:focus{
    outline: 1px solid #32334D;
    box-shadow: 0 0 10px 4px #32334D;
  }
  &&::placeholder {
    color: #fc984cba ;
  }
`

const GridComponent = ({podcasts}) => {

  const [input, setInput] = useState("")
  
  const filteredPodcasts = podcasts.filter((podcast) => 
  podcast.name.toLowerCase().includes(input.toLowerCase()));

  const filteredGridItems = filteredPodcasts.map((podcast) => { 
    return <GridItem podcast={podcast}/>
  })

  const gridItems = podcasts.map((podcast) => {
    return <GridItem podcast={podcast}/>
  
})


  return (
    <>
    <Title>All Podcasts</Title>
    <FlexContainer>
      <SearchBar type="text" placeholder="Search for a Podcast!" onChange={(e) => setInput(e.target.value)} />
    </FlexContainer>
    
    {input != "" ? 
    <FlexContainer>
    {filteredGridItems}
    </FlexContainer> 
    :
    <FlexContainer>
    {gridItems}
    </FlexContainer> }:
    


    </>
  )
}

export default GridComponent