import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import GlobalStyles from '../components/GlobalStyles'
import { SongRatingsContextProvider } from '../hooks/useRatings'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <SongRatingsContextProvider>
        <Component {...pageProps} />
      </SongRatingsContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
