import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from 'react-query'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RatingList from '../components/RatingList'
import SongPreviewList from '../components/SongPreviewList'
import { useSongRatings } from '../hooks/useRatings'
import { fetchRecommendations, fetchSongs } from '../services/songs'

export const Recommendations = (): JSX.Element => {
  const { ratings } = useSongRatings()
  const ratingIds = Object.keys(ratings)
  const { data: songs, isLoading: songsIsLoading } = useQuery(
    'songs',
    fetchSongs
  )
  const { data, isLoading: recommendationsIsLoading } = useQuery(
    ['recommendations', ratingIds],
    () => fetchRecommendations(ratings),
    { enabled: ratingIds.length > 0 }
  )

  const recommenedSongs = songs?.filter((song) =>
    data?.similar.includes(song.id)
  )

  const tasteBreakerSongs = songs?.filter((song) =>
    data?.percentile.includes(song.id)
  )

  return (
    <div>
      <Head>
        <title>Tuner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <SongPreviewList
        heading="Most similar songs to your likes"
        songs={recommenedSongs}
        isLoading={songsIsLoading || recommendationsIsLoading}
        description={
          <Description>
            See the songs that are most similar to your likes and least similar
            to your dislikes. The similarities are calculated using the songs
            genres as well as their acousticness, instrumentalness,
            danceability, loudness, and valence scores provided by
            Spotify&apos;s API.
          </Description>
        }
      />

      <SongPreviewList
        heading="Other songs to consider"
        songs={tasteBreakerSongs}
        isLoading={songsIsLoading || recommendationsIsLoading}
        description={
          <Description>
            See the songs are still similar to your likes, but maybe a little
            bit more out there. This section uses the same list of ranked songs
            as above. However instead of taking the top most similar songs, this
            list samples songs starting at the 95th down to the 63rd percentile
            in 4 percentile decrements: 95, 91, 87, 83, 79, 75, 71, 67, 63.
          </Description>
        }
      />

      <RatingList
        songs={songs}
        description={
          <Description>
            {ratingIds.length === 0 ? (
              <>
                Please <Link href="/">rate</Link> a few songs to get relevant
                song recommendations.
              </>
            ) : (
              <>
                Below are the songs that you&apos;ve rated already. You can
                remove any single rating so see how it affects your
                recommendations or clear all of your ratings to have a clean
                start.
              </>
            )}
          </Description>
        }
      />

      <Footer />
    </div>
  )
}

export default Recommendations
