import React, { FC, useContext } from 'react'
import { Box } from '@mui/material'
import { AuthContext } from './../contexts/AuthContext'

interface WelcomeMessageProps {
  position: string,
  country?: string
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({ position, country = 'Vietnam' }) => {
  const { authInfo: { username } } = useContext(AuthContext)

  
  return (
    <Box mb={1}>Welcome {username} - {position} from {country}</Box>
  )
}

export default WelcomeMessage
