import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../../helpers/getSeason";
import { DateTimePicker } from "@mui/lab";

export default function DateConverter() {
  const [earthDate, setEarthDate] = useState<Date>(new Date());
  const marsDate = new MarsDate(earthDate);

  const my = marsDate.getCalendarYear().toString();
  const ls = (Math.round(marsDate.getLs() * 1000) / 1000).toString() + "°";
  const mst = marsDate.getMST();

  return (
    <Grid item xs={12} maxWidth="400px">
      <Typography component="h2" variant="h3" color="primary">
        Convert a Date/Time
      </Typography>

      <Card raised sx={{ mt: "2rem" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Earth Date"
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
