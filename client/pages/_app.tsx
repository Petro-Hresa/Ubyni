
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import  Header  from './components/Header/_header.ui'
import store , {persistor} from '../store/store'
import '../styles/index.css'
import {PersistGate} from 'redux-persist/integration/react';

function App({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <title>Ubyni</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="Ubyni" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* Header */}
        <Header/>
        {/* Body */}
        <main>
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>

  </>
}
// App.displayName = "App";
export default App


export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};