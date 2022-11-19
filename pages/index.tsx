import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Philip Karlsson portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Philip Karlsson</h1>
        <p>25 year old data science student looking for work.</p>
        <h2>Work experience</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.github.com/Plogbilen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-github.svg"
            alt="GitHub logo"
            width={64}
            height={64}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/philip-karlsson-981a9410a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons8-linkedin-circled.svg"
            alt="LinkedIn logo"
            width={64}
            height={64}
          />
        </a>
      </footer>
    </div>
  );
}