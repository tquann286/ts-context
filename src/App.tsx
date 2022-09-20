import './App.css'
import Navbar from './components/Navbar'
import ToggleThemeBtn from './components/ToggleThemeBtn'
import Movies from './components/Movies'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import MovieContextProvider from './contexts/MovieContext'
import AuthContextProvider from './contexts/AuthContext'

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <Movies />
              <ToggleThemeBtn />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
