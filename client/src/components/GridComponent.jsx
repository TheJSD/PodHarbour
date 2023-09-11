import React, { useState } from 'react'
import GridItem from './GridItem'
import styled from 'styled-components'


const FlexContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap:1rem;
  justify-content: center;
  padding-left: 100px;
  margin-left: 70px;
  padding-top: 20px;
`

const Title = styled.h1`
  text-align:center;
  color: #32334D;
  font-size: 50px;
  padding-top: 20px;
  text-align:center;
  color: #32334dd7;
  font-size: 50px;
`

const SearchBar = styled.input`
  padding: 5px;
  margin: 5px;
  border:0;
  border-radius:10px;
  box-shadow: 0 0 2px 2px #32334dd7;
  background-color: #32334dd7;
  color: #ffb834;
  &&:focus{
    outline: 1px solid #32334dd7;
    box-shadow: 0 0 10px 4px #32334dd7;
  }
  &&::placeholder {
    color: #ffb834 ;
  }
`

const GridComponent = ({podcasts, titleText}) => {

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
    <FlexContainer>
    <Title>{titleText}</Title>
    </FlexContainer>
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