import { Card, CardContent, Grid, Theme, Typography } from "@material-ui/core";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../../helpers/getSeason";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "2rem",
  },
  card: {
    maxWidth: "400px",
    marginTop: "1rem",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
  },
}));

export type DateConverterProps = {};

export default function DateConverter(props: DateConverterProps) {
  const classes = useStyles();

  const [earthDate, setEarthDate] = useState(new Date());
  const marsDate = new MarsDate(earthDate);

  const my = marsDate.getCalendarYear().toString();
  const ls = (Math.round(marsDate.getLs() * 1000) / 1000).toString() + "°";
  const mst = marsDate.getMST();

  return (
    <section className={classes.root}>
      <Typography component="h2" variant="h3" color="primary">
        Convert a Date/Time
      </Typography>

      <Card className={classes.card} raised>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <KeyboardDateTimePicker
                label="Enter Earth date"
                value={earthDate}
                onChange={setEarthDate}
              />
            </Grid>
            <Grid item xs={12}>
              MY {my}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* <div className={styles.container}>
        <div className={styles.dateSection}>
          <h3 className={styles.inputHeader}>Input Earth Date</h3>
          <KeyboardDateTimePicker value={earthDate} onChange={setEarthDate} />
        </div>

        <div className={styles.dateSection}>
          <h3 className={styles.inputHeader}>Converted Mars Date</h3>
          <div>
            <div className={styles.dateItemContainer}>
              <DateItem title="MY" body={my} />
              <DateItem title="LS" body={ls} />
              <DateItem title="MST" body={mst} />
            </div>
            <p className={styles.seasonText}>
              ({getSeason(marsDate.getLs())}, Northern Hemisphere)
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
