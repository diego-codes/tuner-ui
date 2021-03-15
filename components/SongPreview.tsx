import { ChangeEventHandler, FC } from 'react'
import styled, { css } from 'styled-components'
import { Song } from '../types/Song'
import EmbedToggle from './EmbedToggle'
import Artist from './Artist'
import SongTitle from './SongTitle'

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid lightgray;
  padding: 1em 0.5em;
`
const Input = styled.input`
  height: 1px;
  width: 1px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
`

const InputLabel = styled.label<{ checked: boolean; hasRating: boolean }>`
  box-sizing: border-box;
  position: relative;
  margin-right: 0.4em;
  padding: 0.2em 1em;
  cursor: pointer;
  border: 1px solid ${({ checked }) => (checked ? 'gray' : 'lightgray')};
  flex: 1;
  text-align: center;

  ${({ hasRating }) =>
    hasRating &&
    css<{ checked: boolean }>`
      filter: grayscale(${({ checked }) => (checked ? '0' : '100')}%);
      color: ${({ checked }) => (checked ? 'inherit' : 'gray')};
    `}

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`
const FieldSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  width: 100%;
`

const Details = styled.div`
  margin-bottom: 0.3em;
`

const TitleWrapper = styled.h3`
  margin: 0;
  margin-bottom: 0.2em;
  font-size: 1em;
  text-transform: capitalize;
`

const EmbedContainer = styled.div`
  margin-bottom: 0.3em;
`

type SongPreviewProps = {
  song: Song
  rating?: number
  onRatingChange: (id: string, rating: number) => void
}

const SongPreview: FC<SongPreviewProps> = ({
  song,
  rating,
  onRatingChange,
}) => {
  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onRatingChange(song.id, parseInt(e.target.value, 10))
  }

  return (
    <Container>
      <Details>
        <TitleWrapper>
          <SongTitle id={song.id}>{song.title}</SongTitle>
        </TitleWrapper>
        <Artist>{song.artist}</Artist>
      </Details>
      <EmbedContainer>
        <EmbedToggle id={song.id} />
      </EmbedContainer>

      <FieldSet>
        <InputLabel checked={rating === 1} hasRating={!!rating}>
          <Input
            type="radio"
            value={1}
            id={`${song.id}-like`}
            name={`${song.id}-rating`}
            checked={rating === 1}
            onChange={handleRatingChange}
          />
          👍 Like
        </InputLabel>
        <InputLabel checked={rating === -1} hasRating={!!rating}>
          <Input
            type="radio"
            value={-1}
            id={`${song.id}-dislike`}
            name={`${song.id}-rating`}
            checked={rating === -1}
            onChange={handleRatingChange}
          />
          👎 Dislike
        </InputLabel>
      </FieldSet>
    </Container>
  )
}

export default SongPreview
