import { Fab } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ToggleThemeBtn = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Fab color={theme} variant='extended' style={{ position: 'fixed', right: '3rem', bottom: '3rem' }}>
      Toggle Theme
    </Fab>
  )
}

export default ToggleThemeBtn
