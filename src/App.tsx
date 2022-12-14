import './App.css'
import Navbar from './components/Navbar'
import ToggleThemeBtn from './components/ToggleThemeBtn'
import Movies from './components/Movies'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import MovieContextProvider from './contexts/MovieContext'
import AuthContextProvider from './contexts/AuthContext'
import { Grid } from '@mui/material'
import TopMovie from './components/TopMovie'
import TopMovieContextProvider from './contexts/TopMovieContext'

const App = () => {
  return (
    <div>
      <TopMovieContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovie />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  )
}

export default App
