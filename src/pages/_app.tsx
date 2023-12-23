import { AppStateProvider } from '@/store/app-state'
import  Layout  from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <Layout>
      <Component {...pageProps} />  
      </Layout>
    </AppStateProvider>
    
  )
}
