import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sai Gugulothu | Developer Portfolio</title>
        <meta
          name="description"
          content="Developer Portfolio Website using Next.js framework"
        />
        <link rel="icon" href="/favicon-terminal.ico" />
      </Head>
    </div>
  );
}
