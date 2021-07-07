import Head from "next/head";
import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionCoords } from "../src/hooks/useMissionCoords";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";
import { Container, Grid } from "@material-ui/core";

const starts = {
  zhu: {
    epoch: new Date("2021-05-14T23:18:00Z"),
    name: "Zhurong",
  },
  igy: {
    epoch: new Date("2021-04-03T00:00:00Z"),
    name: "Ingenuity",
  },
  m20: {
    epoch: new Date("2021-02-18T20:55:00Z"),
    name: "Perseverance",
  },
  ins: {
    epoch: new Date("2018-11-26T19:52:59Z"),
    name: "InSight",
  },
  msl: {
    epoch: new Date("2012-08-06T05:17:57Z"),
    name: "Curiosity",
  },
};

export default function Home() {
  const coords = useMissionCoords();

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
      <Container maxWidth="md">
        <HomeHeader />
        <Grid>
          <MissionCard
            name={starts.zhu.name}
            lat={coords.zhu.lat}
            lon={coords.zhu.lon}
            missionStart={starts.zhu.epoch}
            bannerUrl={"/zhurong_banner.png"}
          />
          {/* <MissionCard
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
          /> */}
        </Grid>
        {/* <DateConverter />
        <LearnSection /> */}
      </Container>
    </>
  );
}
