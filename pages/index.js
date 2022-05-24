import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Websocket Analyzer</title>
        <meta name="description" content="A tool for analyzing websocket data" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Websocket Analyzer
        </h1>

        <p className={styles.description}>
          Get started by connecting to a websocket server.
        </p>

      </main>
    </div>
  )
}
