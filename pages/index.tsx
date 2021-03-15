import { random } from 'faker'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from 'react-query'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SongPreviewList from '../components/SongPreviewList'
import SongSearch from '../components/SongSearch'
import { fetchSongs } from '../services/songs'

export const Home = (): JSX.Element => {
  const {
    query: { search },
    push,
  } = useRouter()

  const searchValue = search as string
  const { data: songs, isLoading } = useQuery('songs', fetchSongs)
  const testSearchVal = searchValue?.toLowerCase()
  const songResults =
    testSearchVal &&
    songs?.filter(
      (song) =>
        song.artist.toLowerCase().includes(testSearchVal) ||
        song.title.toLowerCase().includes(testSearchVal)
    )

  const handleSearchSubmit = (value: string) => {
    push(`/?search=${value}`)
  }

  return (
    <div>
      <Head>
        <title>Tuner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Welcome to Tuner</h1>
      <Description>
        Rate songs that you like and dislike to get song recommendations. Search
        for songs or rate the small selection below. If you do not know or
        remember the song, you can listen to a Spotify preview (may require a
        Spotify account for some).
      </Description>
      <Description>
        Once you have some ratings, you can head over to the{' '}
        <Link href="/recommendations">recommendations</Link> page to see some
        recommended songs.
      </Description>

      <Description>
        To explore more songs, you can click on a song title to see other songs
        that are most similar to it. You can also click on the artist name to
        see all of the songs from that artist.
      </Description>
      <Description>
        This application is a final project submission for CSC 575 at DePaul
        University for the 2021 Winter Quarter.
      </Description>

      <SongSearch
        key={searchValue}
        onSubmit={handleSearchSubmit}
        initialValue={searchValue}
      />
      <SongPreviewList
        heading={
          searchValue
            ? `Search results for ${searchValue}`
            : `Songs to get you started`
        }
        songs={songResults || (songs && random.arrayElements(songs, 12))}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  )
}

export default Home
