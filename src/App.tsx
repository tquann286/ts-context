import React from 'react'
import './App.css'
import ProgressContextProvider from './components/contexts/ProgressContext'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <ProgressContextProvider>
        <Navbar />
      </ProgressContextProvider>
    </div>
  )
}

export default App
