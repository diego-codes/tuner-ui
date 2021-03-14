import Head from 'next/head'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Header from '../components/Header'
import SongPreviewList from '../components/SongPreviewList'
import SongSearch from '../components/SongSearch'
import { fetchSongs } from '../services/songs'

export const Home = (): JSX.Element => {
  const { data: songs } = useQuery('songs', fetchSongs)
  const [searchVal, setSearchVal] = useState('')

  const testSearchVal = searchVal.toLowerCase()
  const songResults = songs?.filter(
    (song) =>
      song.artist.includes(testSearchVal) || song.title.includes(testSearchVal)
  )

  return (
    <div>
      <Head>
        <title>Tuner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Welcome to Tuner</h1>
      <p>Find songs that you like, rate them, and discover new songs!</p>
      <SongSearch onSubmit={(val) => val.length >= 3 && setSearchVal(val)} />
      {searchVal && (
        <SongPreviewList
          heading={`Search results for ${searchVal}`}
          songs={songResults}
        />
      )}
    </div>
  )
}

export default Home
