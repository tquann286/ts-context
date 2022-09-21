import axios from 'axios'
import { createContext, ReactNode, useReducer } from 'react'
import { topMovieReducer, TopMovieState } from '../reducer/TopMovieReducer'
import { TopMovieActionType } from '../reducer/types'

const { GET_TOP_MOVIES } = TopMovieActionType

interface TopMovieContextDefault {
  topMovies: TopMovieState
  getTopMovies: () => Promise<void>
}

const topMoviesDefault: TopMovieState = []

export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0)
})

interface TopMovieContextProps {
  children: ReactNode
}

const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault)

  const getTopMovies = async () => {
    const topMovie = await axios.get(`https://www.imdbapi.com/?i=tt0111161&apikey=fe5a9562`)

    dispatch({type: GET_TOP_MOVIES, payload: [{...topMovie.data, Watched: false}] })
  }

  const topMovieContextData = {
    topMovies,
    getTopMovies
  }

  return (
    <TopMovieContext.Provider value={topMovieContextData}>
      {children}
    </TopMovieContext.Provider>
  )
}

export default TopMovieContextProvider