import Head from "next/head";
import MissionCard from "../src/components/MissionCard";
import { useCurrentTime } from "../src/hooks/useCurrentTime";

export default function Home() {
  const { mst, my, ls } = useCurrentTime();

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
      </Head>
      <main>
        <header>
          <h1>The current time on Mars is</h1>
          <p>MY{my}</p>
          <p>
            L<sub>s</sub> {Math.round(ls * 1000) / 1000}
          </p>
          <p>{mst} MST</p>
          <p>
            Join 10,000+ designers, get your next design inspiration delivered
            right to your inbox + free PDF guide with the most popular Google
            Font pairs:
          </p>
        </header>
        <section>
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
