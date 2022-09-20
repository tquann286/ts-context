import React, { useContext, useEffect, useState } from 'react'
import { Toolbar, AppBar, Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent, Button, Chip } from '@mui/material'
import WelcomeMessage from './WelcomeMessage'
import { ProgressContext } from '../contexts/ProgressContext'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const [position, setPosition] = useState<string>('Full-stack Developer')
  const [time, setTime] = useState<Date>(() => new Date(Date.now()))

  const { lastTime, status } = useContext(ProgressContext)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const timer = setInterval(() => setTime(() => new Date(Date.now())), 1000)

    return () => clearInterval(timer)
  }, [])

  const boxProps = {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 1,
      py: 2,
    },
  }

  const onPositionChange = (event: SelectChangeEvent<string>) => setPosition(event.target.value)

  return (
    <AppBar position='static' color={theme}>
      <Toolbar>
        <Box {...boxProps}>
          <Typography variant='h6'>My Movies</Typography>
          <Box sx={{ textAlign: 'center' }}>
            <WelcomeMessage position={position} />
            <Chip label={`Last time working on this project: ${lastTime} - Status: In Progress`} />
            <Box mt={1}>
              <FormControl>
                <Select value={position} onChange={onPositionChange}>
                  <MenuItem value='Full-stack Developer'>Full-stack Developer</MenuItem>
                  <MenuItem value='Front-end Developer'>Front-end Developer</MenuItem>
                  <MenuItem value='Back-end Developer'>Back-end Developer</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1}>
              <Typography variant='h6'>{time.toUTCString()}</Typography>
              <Button color='primary' variant='contained'>
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
