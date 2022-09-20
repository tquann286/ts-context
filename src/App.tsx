import './App.css'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import MovieContextProvider from './contexts/MovieContext'
import Navbar from './components/Navbar'
import ToggleThemeBtn from './components/ToggleThemeBtn'
import Movies from './components/Movies'

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies />
            <ToggleThemeBtn />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  )
}

export default App
