import React, { useState, ChangeEvent, useContext } from 'react'
import { OverridableStringUnion } from '@mui/types'
import { Box, TextField, Button, Chip, PropTypes, ButtonPropsColorOverrides } from '@mui/material'
import { MovieContext } from './../contexts/MovieContext'
import { ThemeContext } from './../contexts/ThemeContext'

interface Movie {
  id: string
  title: string
}

const Movies = () => {
  const [movie, setMovie] = useState<string>('')

  const onMovieChange = (e: ChangeEvent<HTMLInputElement>) => setMovie(e.target.value)

  const { movies, addMovie, deleteMovie } = useContext(MovieContext)
  const { theme } = useContext(ThemeContext)
  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
  const buttonTheme = theme as OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>

  return (
    <React.Fragment>
      <Box display='flex' justifyContent='center' my={5}>
        <TextField label='Your favorite movie...' variant='outlined' onChange={onMovieChange} value={movie} />
        <Button
          variant='contained'
          color={buttonTheme}
          onClick={() => {
            if (movie) {
              addMovie(movie)
              setMovie('')
            }
          }}
        >
          Add
        </Button>
      </Box>
      <Box display='flex' justifyContent='center' flexWrap='wrap' mx={5}>
        {movies.map((movie: Movie) => (
          <Chip key={movie.id} label={movie.title} clickable color={chipTheme} onDelete={deleteMovie.bind(this, movie.id)} />
        ))}
      </Box>
    </React.Fragment>
  )
}

export default Movies
