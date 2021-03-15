import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useSongRatings } from '../hooks/useRatings'
import { Song } from '../types/Song'
import Rating from './Rating'

const RatingsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 2em;
`

const Title = styled.h1`
  margin-bottom: 0em;
`

type RatingList = {
  songs?: Song[]
  description?: ReactNode
}

const RatingList: FC<RatingList> = ({ songs = [], description }) => {
  const { ratings, removeRating, clearRatings } = useSongRatings()
  const ratingIds = Object.keys(ratings)
  const ratedSongs = songs.filter((song) => ratingIds?.includes(song.id))

  return (
    <div>
      <Title>Ratings</Title>
      {description}

      <RatingsContainer>
        {ratedSongs.map((song) => (
          <Rating
            key={song.id}
            song={song}
            rating={ratings[song.id]}
            onRemove={removeRating}
          />
        ))}
      </RatingsContainer>

      {ratingIds.length > 0 && (
        <p>
          <button onClick={clearRatings}>Clear ratings</button>
        </p>
      )}
    </div>
  )
}

export default RatingList
