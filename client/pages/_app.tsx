
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
export default App;


export function setHeight (set:any , height:number) {

   function forceUpdate() { set(height)}
  console.log(height);
  

  window.addEventListener('resize', () => {
    let flag = false
    if (window.innerWidth < 768 && !flag) {
     forceUpdate()
      flag = true
    }

  });

   forceUpdate()

}
