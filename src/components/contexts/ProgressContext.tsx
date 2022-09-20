import { createContext, ReactNode } from 'react'

interface ProgressContextProviderProps {
  children: ReactNode
}

interface ProgressContextDefault {
  lastTime: string,
  status: string
}

const progressDefault = {
  lastTime: '17/09/2022',
  status: 'In Progress',
}

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault)

const ProgressContextProvider = ({ children }: ProgressContextProviderProps) => <ProgressContext.Provider value={progressDefault}>{children}</ProgressContext.Provider>

export default ProgressContextProvider
