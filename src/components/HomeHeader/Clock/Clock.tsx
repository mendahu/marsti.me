import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { useCurrentTime } from "../../../contexts/CurrentTimeContext";
import classnames from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export type ClockProps = {};

const useStyles = makeStyles((theme: Theme) => ({
  clock: {
    fontFamily: ["Oxygen Mono", "monospace"].join(","),
  },
  clockPrimary: {
    fontSize: "4.4rem",
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
  marginBottom: {
    marginBottom: "8px",
  },
}));

export default function Clock(props: ClockProps) {
  const classes = useStyles();
  const isWideScreen = useMediaQuery("(min-width:415px)");

  const { getLMST, ls, year } = useCurrentTime();
  const { hour, min, sec } = getLMST();

  const roundedLs = Math.round(ls * 10000) / 10000;

  return (
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
        className={classes.marginBottom}
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
            MST
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    // <div className={styles.root}>
    //   <div className={styles.time}>
    //     <div className={styles.mainContainer}>
    //       <span className={styles.main}>
    //         {hour}:{min}
    //       </span>
    //     </div>
    //     <div className={styles.secondaryContainer}>
    //       <div>
    //         <span className={styles.secondary}>:{sec}</span>
    //       </div>
    //       <div>
    //         <span className={styles.tertiary}>
    //           <abbr title="Mean Solar Time">MST</abbr>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.date}>
    //     <div>
    //       <span>
    //         <abbr title="Solar Longitude">
    //           L<sub>S</sub>
    //         </abbr>{" "}
    //         {roundedLs}&deg;
    //       </span>
    //     </div>
    //     <div>
    //       <span>
    //         <abbr title="Mars Year">MY</abbr> {year}
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
}
