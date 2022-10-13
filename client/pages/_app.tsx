
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'


import  Header  from './components/Header/_header.ui'
import store , {persistor} from '../store/store'
import '../styles/index.css'
import {PersistGate} from 'redux-persist/integration/react';


<<<<<<< HEAD
=======
function App({ Component, pageProps }: AppProps) {
  
>>>>>>> 871ed43879a48e3d175a66b1ec699e1d37612abd
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
<<<<<<< HEAD
export default App


export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
=======
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
>>>>>>> 871ed43879a48e3d175a66b1ec699e1d37612abd
