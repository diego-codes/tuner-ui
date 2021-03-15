import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useSongRatings } from '../hooks/useRatings'
import { Song } from '../types/Song'
import SongPreview from './SongPreview'

const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 2em;
`

const Title = styled.h1`
  margin-bottom: 0em;
`

const SubTitle = styled.h4`
  margin: 0;
  margin-bottom: 2em;
`

type SongPreviewListProps = {
  songs?: Song[]
  heading: string
  isLoading?: boolean
  description?: ReactNode
}
const SongPreviewList: FC<SongPreviewListProps> = ({
  songs = [],
  heading,
  description,
  isLoading,
}) => {
  const { ratings, addRating } = useSongRatings()

  const getSubTitle = () => {
    if (isLoading) {
      return 'Loading songs...'
    }

    if (songs.length === 0) {
      return 'No songs to display'
    }

    return `Displaying ${songs.length} songs`
  }

  return (
    <div>
      <Title>{heading}</Title>
      {description}
      <SubTitle>{getSubTitle()}</SubTitle>

      <SongsContainer>
        {songs.map((song) => (
          <SongPreview
            key={song.id}
            song={song}
            rating={ratings[song.id]}
            onRatingChange={addRating}
          />
        ))}
      </SongsContainer>
    </div>
  )
}

export default SongPreviewList
