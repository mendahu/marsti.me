import Head from "next/head";
import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionCoords } from "../src/hooks/useMissionCoords";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";
import { Container, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import spacecraft from "../config/spacecraft.json";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    marginTop: "2rem",
  },
}));

export type Spacecraft = {
  id: string;
  epoch: string;
  name: string;
  banner: string;
  coords: {
    lon: number;
    lat: number;
  };
};

export default function Home() {
  const classes = useStyles();
  const coords = useMissionCoords(spacecraft as Spacecraft[]);

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
        <Grid
          container
          spacing={3}
          justifyContent="center"
          className={classes.grid}
        >
          {spacecraft.map((vehicle) => {
            const { id } = vehicle;
            return (
              <MissionCard
                key={vehicle.id}
                name={vehicle.name}
                lat={coords[id].lat}
                lon={coords[id].lon}
                missionStart={new Date(vehicle.epoch)}
                bannerUrl={vehicle.banner}
              />
            );
          })}
        </Grid>
        <DateConverter />
        {/*<LearnSection /> */}
      </Container>
    </>
  );
}
