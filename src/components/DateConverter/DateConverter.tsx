import { Card, CardContent, Grid, Theme, Typography } from "@material-ui/core";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../../helpers/getSeason";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "400px",
  },
  card: {
    marginTop: "1rem",
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
    <Grid item xs={12} className={classes.root}>
      <Typography component="h2" variant="h3" color="primary">
        Convert a Date/Time
      </Typography>

      <Card className={classes.card} raised>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <KeyboardDateTimePicker
                label="Enter Earth date"
                value={earthDate}
                onChange={setEarthDate}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" paragraph>
                MY {my}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" paragraph>
                LS {ls}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" paragraph>
                {mst} MST
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                {getSeason(marsDate.getLs())}, Northern Hemisphere
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
