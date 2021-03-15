import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import Header from '../../components/Header'
import SongPreviewList from '../../components/SongPreviewList'
import { fetchSimilarSongs, fetchSongs } from '../../services/songs'
import SpotifyEmbed from '../../components/SpotifyEmbed'
import Artist from '../../components/Artist'
import SongTitle from '../../components/SongTitle'
import styled from 'styled-components'
import Footer from '../../components/Footer'

const Title = styled.h1`
  margin-bottom: 0em;
`
export const Profile = (): JSX.Element => {
  const {
    query: { id },
  } = useRouter()
  const { data: songs } = useQuery('songs', fetchSongs)
  const { data: similarSongIds } = useQuery(
    ['songs', id],
    () => fetchSimilarSongs(id as string),
    {
      enabled: !!id,
    }
  )

  const song = songs?.find((song) => song.id === id)

  const similarSongs = songs?.filter((song) =>
    similarSongIds?.includes(song.id)
  )

  return (
    <div>
      <Head>
        <title>Tuner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {song && (
        <>
          <Title>
            <SongTitle>{song.title}</SongTitle>
          </Title>
          <Artist>{song.artist}</Artist>
          <SpotifyEmbed id={song.id} />
        </>
      )}
      <SongPreviewList heading="Most similar songs" songs={similarSongs} />
      <Footer />
    </div>
  )
}

export default Profile
