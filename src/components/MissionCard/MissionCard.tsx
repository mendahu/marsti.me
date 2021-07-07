import { useCurrentTime } from "../../contexts/CurrentTimeContext";
import { useMissionTime } from "../../hooks/useMissionTime";
import styles from "./styles/MissionCard.module.css";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export type MissionCardProps = {
  name: string;
  lon: number;
  lat: number;
  missionStart: Date;
  bannerUrl: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  clock: {
    fontFamily: ["Oxygen Mono", "monospace"].join(","),
    fontSize: "3.2rem",
  },
}));

export const MissionCard = (props: MissionCardProps) => {
  const classes = useStyles();

  const { getLMST } = useCurrentTime();
  const { hour, min, sec } = getLMST(props.lon);
  const { sol } = useMissionTime(props.missionStart, props.lon);

  const formatLon = (lon: number) => {
    return Math.round(lon * 10000) / 10000;
  };

  return (
    <Card raised>
      <CardMedia
        component="img"
        image="/zhurong_banner.png"
        title={props.name}
        alt={props.name}
      />
      <CardContent component="article">
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <Typography component="h2" variant="h4">
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h2" variant="h4" align="right" paragraph>
              Sol: {sol}
            </Typography>
          </Grid>
        </Grid>
        <Typography className={classes.clock} align="center" paragraph>
          {hour}:{min}:{sec}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Lat: {props.lat}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right">Lon: {props.lon}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
