import useLocalStorage, { writeStorage } from '@rehooks/local-storage'
import { Ratings } from '../types/Ratings'

export default function useSongRatings(): [
  Record<string, number>,
  (id: string, rating: number) => void
] {
  const [ratings] = useLocalStorage<Ratings>('ratings', {})

  const setSongRating = (id: string, number: number) => {
    writeStorage('ratings', {
      ...ratings,
      [id]: number,
    })
  }

  return [ratings, setSongRating]
}
