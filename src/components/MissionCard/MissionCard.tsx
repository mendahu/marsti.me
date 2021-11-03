import { useCurrentTime } from "../../contexts/CurrentTimeContext";
import { useMissionTime } from "../../hooks/useMissionTime";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

export type MissionCardProps = {
  name: string;
  lon: number;
  lat: number;
  missionStart: Date;
  bannerUrl: string;
};

export const MissionCard = (props: MissionCardProps) => {
  const isWideScreen = useMediaQuery("(min-width:360px)");
  const { getLMST } = useCurrentTime();
  const { hour, min, sec } = getLMST(props.lon);
  const { sol } = useMissionTime(props.missionStart, props.lon);

  const formatCoord = (coord: number) => {
    return Math.abs(Math.round(coord * 10000) / 10000);
  };

  const headerType = isWideScreen ? "h4" : "h5";
  const clockSize = isWideScreen ? "3.8rem" : "3.3rem";
  const coordsSize = isWideScreen ? "1.2rem" : "1rem";

  const ImageComponent = () => {
    return (
      <Image
        src={props.bannerUrl}
        height="100"
        width="300"
        layout="responsive"
        alt={props.name}
      />
    );
  };

  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Card raised>
        <CardMedia component={ImageComponent} />
        <CardContent component="article">
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <Typography component="h2" variant={headerType} color="primary">
                {props.name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                component="h2"
                variant={headerType}
                align="right"
                paragraph
                color="primary"
              >
                Sol: {sol}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="clock"
            fontSize={clockSize}
            align="center"
            paragraph
            color="textSecondary"
          >
            {hour}:{min}:{sec}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                component="p"
                variant="body1"
                fontSize={coordsSize}
                color="textSecondary"
              >
                Lat: {formatCoord(props.lat)}&deg;{props.lat >= 0 ? "N" : "S"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                align="right"
                component="p"
                variant="body1"
                fontSize={coordsSize}
                color="textSecondary"
              >
                Lon: {formatCoord(props.lon)}&deg;W
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MissionCard;
