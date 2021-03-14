import { FC } from 'react'
import styled from 'styled-components'
import useSongRatings from '../hooks/useRatings'
import { Song } from '../types/Song'
import SongPreview from './SongPreview'

const SongsContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 2em;
`
type SongPreviewListProps = {
  songs?: Song[]
  heading: string
}
const SongPreviewList: FC<SongPreviewListProps> = ({ songs = [], heading }) => {
  const [ratings, setSongRating] = useSongRatings()
  return (
    <div>
      <header>
        <h2>{heading}</h2>
        <p>Displaying {songs.length} songs</p>
      </header>

      <SongsContainer>
        {songs.map((song) => (
          <SongPreview
            key={song.id}
            song={song}
            rating={ratings[song.id]}
            onRatingChange={setSongRating}
          />
        ))}
      </SongsContainer>
    </div>
  )
}

export default SongPreviewList
