import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { translation } from '../store/slice/_lang.s'
import { useSelector } from 'react-redux';
import { TRootState } from '../store/store';
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  // const {lang} = useSelector((state:TRootState)=> state.lang)
  // const leng = 'en'
  return (
    <div>
      {/* {translation("registr", lang)} */}
    </div>
  )
}

export default Home;
