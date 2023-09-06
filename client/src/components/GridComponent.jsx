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
`

const GridContainer = ({podcasts}) => {

    const gridItems = podcasts.map((podcast) => {
    return <GridItem podcast={podcast}/>
})


  return (
    <>
    <Title>All Podcasts</Title>
    <FlexContainer>
    {gridItems}
    </FlexContainer>
    </>
  )
}

export default GridContainer