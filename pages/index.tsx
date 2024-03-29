import HomeHeader from "../src/components/HomeHeader/HomeHeader";
import MissionCard from "../src/components/MissionCard/MissionCard";
import { useMissionCoords } from "../src/hooks/useMissionCoords";
import DateConverter from "../src/components/DateConverter/DateConverter";
import LearnSection from "../src/components/LearnSection/LearnSection";
import { Container, Grid } from "@mui/material";
import spacecraft from "../config/spacecraft.json";
import BirthdayTool from "../src/components/BirthdayTool/BirthdayTool";
import Acknowledgements from "../src/components/Acknowledgements/Acknowledgements";
import RelatedContent from "../src/components/RelatedContent/RelatedContent";
import Support from "../src/components/Support/Support";
import SocialMedia from "../src/components/SocialMedia/SocialMedia";

import zhurongBanner from "../public/zhurong_banner.png";
import ingenuityBanner from "../public/ingenuity_banner.png";
import perseveranceBanner from "../public/perseverance_banner.png";
import mslBanner from "../public/msl_banner.png";
import inSightBanner from "../public/insight_banner.png";

const banners = {
  igy: ingenuityBanner,
  msl: mslBanner,
  m20: perseveranceBanner,
  zhu: zhurongBanner,
  ins: inSightBanner,
};

export type Spacecraft = {
  id: string;
  epoch: string;
  name: string;
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
            bannerUrl={banners[id]}
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
      <HomeGridContainer child={<RelatedContent />} />
      <HomeGridContainer child={<Support />} />
      <HomeGridContainer child={<SocialMedia />} />
      <HomeGridContainer child={<Acknowledgements />} />
    </Container>
  );
}
