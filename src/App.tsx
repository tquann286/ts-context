import './App.css'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import MovieContextProvider from './contexts/MovieContext'
import Navbar from './components/Navbar'
import ToggleThemeBtn from './components/ToggleThemeBtn'

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <ToggleThemeBtn />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  )
}

export default App
