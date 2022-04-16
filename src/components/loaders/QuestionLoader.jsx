import React from 'react'
import {Stack, Skeleton} from '@mui/material'

function QuestionLoader(props) {
  return (
      <>
    <div className="card no-border p-3 my-3">
      <Stack  spacing={1} className="question">
        <Skeleton variant="rectangular" animation="wave" height={100} />
      </Stack>
    </div>
    <div className="card no-border p-3 my-3">
    <Stack  spacing={1} className="question">
      <Skeleton variant="rectangular" animation="wave" height={100} />
    </Stack>
  </div>
  </>

  )
}

export default QuestionLoader