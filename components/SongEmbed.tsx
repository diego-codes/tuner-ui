import { FC, useState } from 'react'

type SongEmbedProps = {
  id: string
}
const SongEmbed: FC<SongEmbedProps> = ({ id }) => {
  const [showEmbed, setShowEmbed] = useState(false)
  const toggleEmbed = () => setShowEmbed((val) => !val)
  return (
    <div>
      <div>
        <button onClick={toggleEmbed}>
          Listen to song preview {showEmbed ? '↑' : '↓'}
        </button>
      </div>
      {showEmbed && (
        <iframe
          src={`https://open.spotify.com/embed/track/${id}`}
          width="300"
          height="80"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media"
        />
      )}
    </div>
  )
}

export default SongEmbed
