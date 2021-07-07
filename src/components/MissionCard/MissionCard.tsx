import { useCurrentTime } from "../../contexts/CurrentTimeContext";
import { useMissionTime } from "../../hooks/useMissionTime";
import {
  Card,
  CardContent,
  Typography,
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
  root: {
    maxWidth: "400px",
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
  },
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

  const formatCoord = (coord: number) => {
    return Math.abs(Math.round(coord * 10000) / 10000);
  };

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Card raised className={classes.card}>
        <CardMedia
          component="img"
          image={props.bannerUrl}
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
          <Typography
            className={classes.clock}
            align="center"
            paragraph
            color="textSecondary"
          >
            {hour}:{min}:{sec}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography component="p" variant="body1" color="textSecondary">
                Lat: {formatCoord(props.lat)}&deg;{props.lat >= 0 ? "N" : "S"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                align="right"
                component="p"
                variant="body1"
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
