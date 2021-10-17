import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MarsDate } from "mars-date-utils";
import React, { useState } from "react";
import { getSeason } from "../../helpers/getSeason";
import { DateTimePicker } from "@mui/lab";
import { Box } from "@mui/system";
import { format } from "date-fns";

export default function BirthdayTool() {
  const [earthDate, setEarthDate] = useState<Date>(new Date());
  const marsDate = new MarsDate(earthDate);

  const my = marsDate.getCalendarYear().toString();
  const ls = (Math.round(marsDate.getLs() * 1000) / 1000).toString() + "°";
  const mst = marsDate.getMST();
  const ageInYears = Math.round(marsDate.getAgeInYears());
  const nextBirthday = format(
    marsDate.getNextAnniversary(),
    "EEEE, MMMM Lo, yyyy"
  );

  const [email, setEmail] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit!");
    fetch("/api/birthday", {
      method: "POST",
      body: JSON.stringify({ email, earthDate }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography component="h2" variant="h3" color="primary">
        Get Your Mars Birthday
      </Typography>

      <Card raised sx={{ mt: "2rem" }}>
        <CardMedia
          component="img"
          image={"earth-mars.png"}
          title={"Convert Earth Date to Mars Date"}
          alt={"Picture of Earth and MArs"}
        />
        <CardContent>
          <Stack spacing={3}>
            <Box>
              <Typography paragraph>
                Enter your Earth date of birth to find out when you were born on
                Mars, and get birthday reminders via email!
              </Typography>
            </Box>
            <Box>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    id="earth-date"
                    {...props}
                    fullWidth
                    helperText="Enter Your Earth Birthday"
                  />
                )}
                label="Earth Birthday"
                value={earthDate}
                onChange={setEarthDate}
              />
            </Box>
            <Box>
              <Typography paragraph>
                You were born around {mst}{" "}
                <abbr title="Mean Solar Time">MST</abbr> during L<sub>S</sub>{" "}
                {ls} ({getSeason(marsDate.getLs())} in the Northern Hemisphere)
                in Mars Year {my}.
              </Typography>
              <Typography>
                You are {ageInYears} Martian years old. Your next Martian
                birthday is {nextBirthday}.
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography
                paragraph
                variant="h5"
                sx={{ alignSelf: "flex-start", mb: "2rem" }}
              >
                Get an email remainder!
              </Typography>
              <TextField
                variant="outlined"
                label="Email Address"
                helperText="Enter Email Address"
                value={email}
                onChange={handleChange}
                fullWidth
              />
              <Button variant="contained" type="submit">
                Remind me
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
