import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../../helpers/getSeason";
import { DateTimePicker } from "@mui/lab";
import { Box } from "@mui/system";
import { isValidDate } from "../../helpers/dateValidation";
import Image from "next/image";
import dateConverterPic from "../../../public/earth-mars.png";

export default function DateConverter() {
  const [earthDate, setEarthDate] = useState<Date>(new Date());
  const marsDate = new MarsDate(earthDate);
  const isWideScreen = useMediaQuery("(min-width:360px)");

  const my = marsDate.getCalendarYear().toString();
  const ls = (Math.round(marsDate.getLs() * 1000) / 1000).toString() + "°";
  const mst = marsDate.getMST();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const clockSize = isWideScreen ? "2.5rem" : "2.2rem";
  const dateSize = isWideScreen ? "1.6rem" : "1.3rem";
  const seasonType = isWideScreen ? "body1" : "body2";

  const dateIsComplete = isValidDate(earthDate);

  const ImageComponent = () => {
    return (
      <Image
        src={dateConverterPic}
        layout="responsive"
        alt={"Picture of Earth and Mars"}
      />
    );
  };

  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography component="h2" variant="h3" color="primary">
        Convert a Date/Time
      </Typography>

      <Card raised sx={{ mt: "2rem" }}>
        <CardMedia component={ImageComponent} />
        <CardContent>
          <Stack>
            <Box mt={"1rem"}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    id="earth-date"
                    {...props}
                    fullWidth
                    helperText="Enter Earth Date to Convert"
                  />
                )}
                label="Earth Date"
                value={earthDate}
                onChange={setEarthDate}
              />
            </Box>

            {dateIsComplete && (
              <Typography
                fontSize={clockSize}
                variant="clock"
                mt="1rem"
                color="textSecondary"
                align="center"
              >
                {mst} <abbr title="Mars Coordinated Time">MTC</abbr>
              </Typography>
            )}
            {dateIsComplete && (
              <Typography
                align="center"
                fontSize={dateSize}
                variant="body1"
                color="textSecondary"
              >
                LS {ls} {bull} MY {my}
              </Typography>
            )}
            {dateIsComplete && (
              <Typography
                align="center"
                variant={seasonType}
                color="textSecondary"
              >
                {getSeason(marsDate.getLs())}, Northern Hemisphere
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
