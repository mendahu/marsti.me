import Head from "next/head";
import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import styles from "../styles/Home.module.css";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionLon } from "../src/hooks/useMissionLon";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";

export default function Home() {
  const lons = useMissionLon();

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
            name={"Ingenuity"}
            lon={lons.igy}
            missionStart={new Date("2021-04-03T00:00:00Z")}
            bannerUrl={"/ingenuity_banner.png"}
          />
          <MissionCard
            name={"Perseverance"}
            lon={lons.m20}
            missionStart={new Date("2021-02-18T20:55:00Z")}
            bannerUrl={"/perseverance_banner.png"}
          />
          <MissionCard
            name={"InSight"}
            lon={lons.ins}
            missionStart={new Date("2018-11-26T19:52:59Z")}
            bannerUrl={"/insight_banner.png"}
          />
          <MissionCard
            name={"Curiosity"}
            lon={lons.msl}
            missionStart={new Date("2012-08-06T05:17:57Z")}
            bannerUrl={"/msl_banner.png"}
          />
        </section>
        <DateConverter />
        <LearnSection />
      </main>
    </>
  );
}
