import { createContext, FC, useContext } from 'react'
import { Ratings } from '../types/Ratings'
import useLocalStorage from './useLocalStorage'

type SongRatingsContextType = {
  ratings: Ratings
  addRating: (id: string, number: number) => void
  removeRating: (id: string) => void
  clearRatings: () => void
}
const SongRatingsContext = createContext<SongRatingsContextType>({
  ratings: {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addRating: () => {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeRating: () => {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearRatings: () => {},
})

export const useSongRatings = (): SongRatingsContextType =>
  useContext(SongRatingsContext)

export const SongRatingsContextProvider: FC = ({ children }) => {
  const [ratings, setRatings] = useLocalStorage<Ratings>('ratings', {})

  const addRating = (id: string, number: number) => {
    setRatings((r) => ({
      ...r,
      [id]: number,
    }))
  }

  const removeRating = (id: string) => {
    setRatings((r) => {
      const newR = { ...r }
      delete newR[id]
      return newR
    })
  }

  const clearRatings = () => setRatings({})

  return (
    <SongRatingsContext.Provider
      value={{ ratings, addRating, removeRating, clearRatings }}
    >
      {children}
    </SongRatingsContext.Provider>
  )
}
