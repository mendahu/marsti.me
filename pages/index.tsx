import Head from "next/head";
import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import styles from "../styles/Home.module.css";
import MissionCard from "../src/components/MissionCard/MissionCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mars Time</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.root}>
        <HomeHeader />
        <section className={styles.missionContainer}>
          <MissionCard
            name={"Curiosity"}
            lon={222.5583}
            missionStart={new Date("2012-08-06T05:17:57Z")}
          />
          <MissionCard
            name={"InSight"}
            lon={224.3766}
            missionStart={new Date("2018-11-26T19:52:59Z")}
          />
          <MissionCard
            name={"Perseverance"}
            lon={282.5492}
            missionStart={new Date("2021-02-18T20:55:00Z")}
          />
        </section>
      </main>
    </>
  );
}
