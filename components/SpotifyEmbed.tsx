import { FC } from 'react'
import styled from 'styled-components'

const Embed = styled.iframe`
  min-width: 300px;
  width: 100%;
  height: 80px;
  background-color: lightgray;
`

type SpotifyEmbedProps = {
  id: string
}

const SpotifyEmbed: FC<SpotifyEmbedProps> = ({ id }) => (
  <Embed
    src={`https://open.spotify.com/embed/track/${id}`}
    frameBorder="0"
    allow="encrypted-media"
  />
)

export default SpotifyEmbed
