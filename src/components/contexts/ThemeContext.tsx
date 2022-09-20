import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProps {
  children: ReactNode
}

interface ThemeContextDefault {
  theme: string
}

const themeDefault = {
  theme: 'light'
}

export const ThemeContext = createContext<ThemeContextDefault>(themeDefault)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(themeDefault.theme)

  const toggleTheme = (theme: string) => setTheme(theme)

  const themeContextDynamicData: { theme: string, toggleTheme: Function } = { theme, toggleTheme }

  return (
    <ThemeContext.Provider value={themeContextDynamicData}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider