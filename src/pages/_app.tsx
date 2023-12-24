import { AppStateProvider } from '@/store/app-state'
import  Layout  from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <Layout>
        <Head>
          <title>Algotrasoft</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
        </Head>
      <Component {...pageProps} />  
      </Layout>
    </AppStateProvider>
    
  )
}
