import { createContext, ReactNode, useReducer } from 'react'
import { topMovieReducer, TopMovieState } from '../reducer/TopMovieReducer'
import { TopMovieActionType } from '../reducer/types'
import topMoviesInfo from './../api/getTopMovies'

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType

interface TopMovieContextDefault {
  topMovies: TopMovieState
  getTopMovies: () => Promise<void>
  toggleWatched: (imdbID: string) => void
}

const topMoviesDefault: TopMovieState = []

export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: () => {},
})

interface TopMovieContextProps {
  children: ReactNode
}

const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault)

  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo)

    dispatch({ type: GET_TOP_MOVIES, payload: topMovies.map((movie) => ({ ...movie.data, Watched: false })) })
  }

  const toggleWatched = (imdbID: string) => {
    dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID })
  }

  const topMovieContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  }

  return <TopMovieContext.Provider value={topMovieContextData}>{children}</TopMovieContext.Provider>
}

export default TopMovieContextProvider
