import { FC } from 'react'
import ContentToggle from './ContentToggle'
import SpotifyEmbed from './SpotifyEmbed'

type SongEmbedProps = {
  id: string
}

const EmbedToggle: FC<SongEmbedProps> = ({ id }) => (
  <ContentToggle buttonText="Listen to song preview">
    <SpotifyEmbed id={id} />
  </ContentToggle>
)

export default EmbedToggle
