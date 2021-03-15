import { FC } from 'react'
import styled from 'styled-components'
import { Song } from '../types/Song'
import Artist from './Artist'
import SongTitle from './SongTitle'

const Container = styled.div`
  display: flex;
  font-size: 0.8em;
  align-items: center;
  border: 1px solid lightgray;
  padding: 1em 0.5em;
`
const Score = styled.span`
  flex: 0 0;
  font-size: 2em;
  margin-right: 0.5em;
`

const RemoveButton = styled.button`
  margin-right: 1em;
`

type RatingProps = {
  song: Song
  rating: number
  onRemove: (id: string) => void
}
const Rating: FC<RatingProps> = ({ song, rating, onRemove }) => {
  return (
    <Container>
      <RemoveButton onClick={() => onRemove(song.id)}>🗑 Remove</RemoveButton>
      <Score>{rating === -1 ? '👎' : '👍'}</Score>
      <div>
        <div>
          <SongTitle id={song.id}>{song.title}</SongTitle>
        </div>
        <Artist>{song.artist}</Artist>
      </div>
    </Container>
  )
}

export default Rating
