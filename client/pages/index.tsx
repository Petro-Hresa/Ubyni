import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { translation } from '../store/slice/_lang.s'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const leng = 'en'
  return (
    <div>
      {translation("registr", leng)}
    </div>
  )
}

export default Home;
