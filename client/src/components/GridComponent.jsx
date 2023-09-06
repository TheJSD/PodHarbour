import React from 'react'
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
  display:flex;
  justify-content:center;
  align-items:center;
`

const GridComponent = ({podcasts}) => {

    const gridItems = podcasts.map((podcast) => {
    return <GridItem podcast={podcast}/>
})


  return (
    <>
    <Title>All Podcasts</Title>
    <FlexContainer>
      <SearchBar/>
    </FlexContainer>
    

    <FlexContainer>
    {gridItems}
    </FlexContainer>
    </>
  )
}

export default GridComponent