
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import  Header  from './components/Header/_Header'
import {store}  from './store/store'
import '../styles/index.scss'


function App({ Component, pageProps }: AppProps) {

  
  return <>
    <Head>
      <title>Ubyni</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="Ubyni" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      {/* Header */}
      <Header/>
      {/* Body */}
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>

  </>
}
App.displayName = "App";
export default App
