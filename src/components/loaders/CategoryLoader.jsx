import React from 'react'
import {Stack, Skeleton} from '@mui/material'

function CategoryLoader(props) {
  return (
      <Stack  spacing={1} width="250px" >
     
        <Skeleton variant="text" animation="wave"  />
        <Skeleton variant="text" animation="wave"  />
        <Skeleton variant="text" animation="wave"  />
        <Skeleton variant="text" animation="wave"  />
       
      </Stack>

  )
}

export default CategoryLoader