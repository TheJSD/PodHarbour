import React from 'react'
import GridItem from '../components/GridItem'
import styled from 'styled-components'


const GridContainer = ({podcasts}) => {

    const gridItems = podcasts.map((podcast) => {
    return <GridItem podcast={podcast}/>
})

const FlexContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:1rem;
    justify-content: center;
`

  return (
    <>
    <FlexContainer>
    {gridItems}
    </FlexContainer>
    </>
  )
}

export default GridContainer