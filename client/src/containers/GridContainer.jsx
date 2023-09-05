import React from 'react'
import GridItem from '../components/GridItem'

const GridContainer = ({podcasts}) => {

    const gridItems = podcasts.map((podcast) => 
    {<GridItem podcast={podcast}/>}
    )

  return (
    <>
    {gridItems}
    </>
  )
}

export default GridContainer