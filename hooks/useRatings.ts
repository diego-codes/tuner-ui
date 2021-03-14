import { Ratings } from '../types/Ratings'
import useLocalStorage from './useLocalStorage'

export default function useSongRatings(): [
  Record<string, number>,
  (id: string, rating: number) => void
] {
  const [ratings, setRatings] = useLocalStorage<Ratings>('ratings', {})

  const setSongRating = (id: string, number: number) => {
    setRatings((r) => ({
      ...r,
      [id]: number,
    }))
  }

  return [ratings, setSongRating]
}
