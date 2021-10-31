import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionCoords } from "../src/hooks/useMissionCoords";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";
import { Container, Grid } from "@mui/material";
import spacecraft from "../config/spacecraft.json";
import BirthdayTool from "../src/components/BirthdayTool/BirthdayTool";
import Acknowledgements from "../src/components/Acknowledgements/Acknowledgements";

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

type HomeGridContainerProps = {
  child: React.ReactNode;
};

function HomeGridContainer(props: HomeGridContainerProps) {
  return (
    <Grid container sx={{ mt: 2 }} justifyContent="center" spacing={3}>
      {props.child}
    </Grid>
  );
}

function MissionCards() {
  const coords = useMissionCoords(spacecraft as Spacecraft[]);

  return (
    <>
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
    </>
  );
}

export default function Home() {
  return (
    <Container maxWidth="md">
      <HomeHeader />
      <HomeGridContainer child={<MissionCards />} />
      <HomeGridContainer child={<DateConverter />} />
      <HomeGridContainer child={<BirthdayTool />} />
      <HomeGridContainer child={<LearnSection />} />
      <HomeGridContainer child={<Acknowledgements />} />
    </Container>
  );
}
