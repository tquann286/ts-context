import React, { useContext, useEffect } from 'react'
import { Box, Card, CardContent, CardHeader, Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { TopMovieContext } from './../contexts/TopMovieContext'

const TopMovie = () => {
  const { topMovies, getTopMovies, toggleWatched } = useContext(TopMovieContext)

  useEffect(() => {
    getTopMovies()
  }, [])

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader title='Top 10 movie of all time' titleTypographyProps={{ variant: 'h4', align: 'center', color: 'primary' }} />
        <CardContent>
          <List>
            {topMovies.map((movie) => (
              <ListItem key={movie.imdbID}>
                <ListItemIcon>
                  <Checkbox checked={movie.Watched} onClick={toggleWatched.bind(this, movie.imdbID)} />
                </ListItemIcon>
                <ListItemText primary={movie.Title}></ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TopMovie
