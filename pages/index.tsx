import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionCoords } from "../src/hooks/useMissionCoords";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";
import { Container, Grid } from "@mui/material";
import spacecraft from "../config/spacecraft.json";

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
  const coords = useMissionCoords(spacecraft as Spacecraft[]);

  return (
    <Container maxWidth="md">
      <HomeHeader />
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {spacecraft.map((vehicle) => {
          const { id } = vehicle;
          return (
            <MissionCard
              key={id}
              name={vehicle.name}
              lat={coords[id].lat}
              lon={coords[id].lon}
              missionStart={new Date(vehicle.epoch)}
              bannerUrl={vehicle.banner}
            />
          );
        })}
      </Grid>
      <Grid container sx={{ mt: 2 }} justifyContent="center" spacing={3}>
        <DateConverter />
      </Grid>
      <LearnSection />
    </Container>
  );
}
