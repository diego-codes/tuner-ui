import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useQuery } from 'react-query'
import Header from '../../components/Header'
import SongEmbed from '../../components/SongEmbed'
import SongPreviewList from '../../components/SongPreviewList'
import {
  fetchRecommendations,
  fetchSimilarSongs,
  fetchSongs,
} from '../../services/songs'

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
          <h1>{song.title}</h1>
          <p>{song.artist}</p>
          <SongEmbed id={song.id} />
        </>
      )}
      <SongPreviewList heading="Most similar songs" songs={similarSongs} />
    </div>
  )
}

export default Profile
