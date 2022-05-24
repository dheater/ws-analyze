import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ServerUrlForm from "../components/ServerUrlForm";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Websocket Analyzer</title>
                <meta name="description" content="A tool for analyzing websocket data"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Websocket Analyzer
                </h1>

                <p className={styles.description}>
                    Enter your websocket server URL to start analyzing
                </p>

                <ServerUrlForm/>

            </main>
        </div>
    )
}
