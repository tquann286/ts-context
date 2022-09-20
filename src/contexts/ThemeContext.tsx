import { PropTypes } from '@mui/material'
import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProps {
  children: ReactNode
}

interface ThemeContextDefault {
  theme: PropTypes.Color,
  toggleTheme: (theme: PropTypes.Color) => void
}

const themeDefault = {
  theme: 'primary' as PropTypes.Color,
  toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextDefault>(themeDefault)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(themeDefault.theme)

  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

  const themeContextDynamicData: { theme: PropTypes.Color, toggleTheme: (theme: PropTypes.Color) => void } = { theme, toggleTheme }

  return (
    <ThemeContext.Provider value={themeContextDynamicData}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider