import { createContext, ReactNode } from 'react'

interface ProgressContextProviderProps {
  children: ReactNode
}

const progressDefault = {
  lastTime: '17/09/2022',
  status: 'In Progress',
}

export const ProgressContext = createContext(progressDefault)

const ProgressContextProvider = ({ children }: ProgressContextProviderProps) => {

  return <ProgressContext.Provider value={progressDefault}>{children}</ProgressContext.Provider>
}

export default ProgressContextProvider
