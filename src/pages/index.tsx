import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <div className={styles.title}>
        <h1>Hello Word</h1>
      </div>
    </>
  )
}
