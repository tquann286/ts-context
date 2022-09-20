import './App.css'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import ToggleThemeBtn from './components/ToggleThemeBtn'

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <ToggleThemeBtn />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
