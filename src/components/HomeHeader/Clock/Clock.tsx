import { Grid, Typography } from "@material-ui/core";
import { useCurrentTime } from "../../../contexts/CurrentTimeContext";
import styles from "./styles/Clock.module.css";

export type ClockProps = {};

export default function Clock(props: ClockProps) {
  const { getLMST, ls, year } = useCurrentTime();
  const { hour, min, sec } = getLMST();

  const roundedLs = Math.round(ls * 10000) / 10000;

  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography>
          {hour}:{min}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>:{sec}</Typography>
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
