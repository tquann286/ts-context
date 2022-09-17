import React, { FC } from 'react'
import { Box } from '@mui/material'

interface WelcomeMessageProps {
  position: string,
  country?: string
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({ position, country = 'Vietnam' }) => {

  
  return (
    <Box mb={1}>Welcome {position} from {country}</Box>
  )
}

export default WelcomeMessage
