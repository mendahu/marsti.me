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
import { DateTimePicker } from "@mui/lab";
import { Box } from "@mui/system";
import useBirthday from "../../hooks/useBirthday";
import useBirthdayReminder from "../../hooks/useBirthdayReminder";
import CircularProgress from "@mui/material/CircularProgress";
import AlertSnackbar from "../AlertSnackbar/AlertSnackbar";

export default function BirthdayTool() {
  const {
    earthBirthday,
    setEarthBirthday,
    birthdayData,
    ageInYears,
    nextBirthday,
  } = useBirthday(new Date());

  const { email, setEmail, submitReminder, submitting, snackbarProps } =
    useBirthdayReminder(earthBirthday);

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
                value={earthBirthday}
                onChange={setEarthBirthday}
              />
            </Box>
            <Box>
              <Typography paragraph>
                You were born around {birthdayData.time}{" "}
                <abbr title="Mean Solar Time">MST</abbr> during L<sub>S</sub>{" "}
                {birthdayData.ls} ({birthdayData.season} in the Northern
                Hemisphere) in Mars Year {birthdayData.year}.
              </Typography>
              <Typography>
                You are {ageInYears} Martian years old. Your next Martian
                birthday is {nextBirthday}.
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={submitReminder}
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
                onChange={setEmail}
                fullWidth
                type="email"
                required
              />
              <Button
                variant="contained"
                type="submit"
                startIcon={
                  submitting && <CircularProgress color="inherit" size={20} />
                }
              >
                {submitting ? "Submitting..." : "Remind me"}
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <AlertSnackbar {...snackbarProps} />
    </Grid>
  );
}
