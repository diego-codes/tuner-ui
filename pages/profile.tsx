import Head from 'next/head'
import { useQuery } from 'react-query'
import Header from '../components/Header'
import SongPreviewList from '../components/SongPreviewList'
import useSongRatings from '../hooks/useRatings'
import { fetchRecommendations, fetchSongs } from '../services/songs'

export const Profile = (): JSX.Element => {
  const [ratings] = useSongRatings()
  const { data: songs } = useQuery('songs', fetchSongs)
  const { data: recommendedSongIds } = useQuery(
    ['recommendations', ratings],
    () => fetchRecommendations(ratings),
    { enabled: Object.keys(ratings).length > 0 }
  )

  const recommenedSongs = songs?.filter((song) =>
    recommendedSongIds?.includes(song.id)
  )

  return (
    <div>
      <Head>
        <title>Tuner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SongPreviewList
        heading="Top recommended songs"
        songs={recommenedSongs}
      />
    </div>
  )
}

export default Profile
