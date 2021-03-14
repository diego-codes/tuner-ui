import axios from 'axios'
import { Ratings } from '../types/Ratings'
import { Song } from '../types/Song'

export const fetchSongs = (): Promise<Song[]> =>
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/songs/`)
    .then(({ data }) => data)

export const fetchRecommendations = (ratings: Ratings): Promise<string[]> =>
  axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/songs/recommendation`, ratings)
    .then(({ data }) => data.map((song: Song) => song.id))

export const fetchSimilarSongs = (id: string): Promise<string[]> =>
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/songs/${id}`)
    .then(({ data }) => data)
