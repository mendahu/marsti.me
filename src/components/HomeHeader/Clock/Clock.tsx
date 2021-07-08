import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { useCurrentTime } from "../../../contexts/CurrentTimeContext";
import classnames from "clsx";

export type ClockProps = {};

const SIGNIFICANT_DIGITS_LS = 4;

const useStyles = makeStyles((theme: Theme) => ({
  clock: {
    fontFamily: ["Oxygen Mono", "monospace"].join(","),
  },
  clockPrimary: {
    fontSize: "3.9rem",
    [theme.breakpoints.up(415)]: {
      fontSize: "6.3rem",
    },
  },
  clockSecondary: {
    fontSize: "1.5rem",
    [theme.breakpoints.up(415)]: {
      fontSize: "2.2rem",
    },
  },
  marginLeft: {
    marginLeft: "5px",
    [theme.breakpoints.up(415)]: {
      marginLeft: "12px",
    },
  },
  calendarText: {
    fontSize: "1.2rem",
    [theme.breakpoints.up(415)]: {
      fontSize: "2rem",
    },
  },
}));

export default function Clock(props: ClockProps) {
  const classes = useStyles();

  const { getLMST, ls, year } = useCurrentTime();
  const { hour, min, sec } = getLMST();

  const roundedLs =
    Math.round(ls * Math.pow(10, SIGNIFICANT_DIGITS_LS)) /
    Math.pow(10, SIGNIFICANT_DIGITS_LS);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography
            component="span"
            className={classnames(classes.clock, classes.clockPrimary)}
          >
            {hour}:{min}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={3}
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Grid item>
            <Typography
              component="span"
              className={classnames(classes.clock, classes.clockSecondary)}
            >
              :{sec}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="span"
              className={classnames(classes.clock, classes.clockSecondary)}
            >
              <abbr title="Mean Solar Time">MST</abbr>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography
            component="span"
            className={classnames(classes.calendarText, classes.marginLeft)}
          >
            <abbr title="Solar Longitude">
              L<sub>S</sub>
            </abbr>{" "}
            {roundedLs}&deg;
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" className={classes.calendarText}>
            <abbr title="Mars Year">MY</abbr> {year}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
