import Head from "next/head";
import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import styles from "../styles/Home.module.css";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionLon } from "../src/hooks/useMissionLon";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";

const starts = {
  zhu: new Date("2021-05-14T23:18:00Z"),
  igy: new Date("2021-04-03T00:00:00Z"),
  m20: new Date("2021-02-18T20:55:00Z"),
  ins: new Date("2018-11-26T19:52:59Z"),
  msl: new Date("2012-08-06T05:17:57Z"),
};

export default function Home() {
  const lons = useMissionLon();

  return (
    <>
      <Head>
        <title>Mars Time</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main className={styles.root}>
        <HomeHeader />
        <section className={styles.missionContainer}>
          <MissionCard
            name={"Zhurong"}
            lon={lons.zhu}
            missionStart={starts.zhu}
            bannerUrl={"/zhurong_banner.png"}
          />
          <MissionCard
            name={"Ingenuity"}
            lon={lons.igy}
            missionStart={starts.igy}
            bannerUrl={"/ingenuity_banner.png"}
          />
          <MissionCard
            name={"Perseverance"}
            lon={lons.m20}
            missionStart={starts.m20}
            bannerUrl={"/perseverance_banner.png"}
          />
          <MissionCard
            name={"InSight"}
            lon={lons.ins}
            missionStart={starts.ins}
            bannerUrl={"/insight_banner.png"}
          />
          <MissionCard
            name={"Curiosity"}
            lon={lons.msl}
            missionStart={starts.msl}
            bannerUrl={"/msl_banner.png"}
          />
        </section>
        <DateConverter />
        <LearnSection />
      </main>
    </>
  );
}
