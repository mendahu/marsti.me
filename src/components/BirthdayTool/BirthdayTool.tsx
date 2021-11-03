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
import { useRouter } from "next/router";
import { useEffect } from "react";
import { isInThePast, isValidDate } from "../../helpers/dateValidation";
import Image from "next/image";

export default function BirthdayTool() {
  const router = useRouter();

  const {
    earthBirthday,
    setEarthBirthday,
    birthdayData,
    ageInYears,
    nextBirthday,
  } = useBirthday();

  const { email, setEmail, submitReminder, submitting, snackbarProps } =
    useBirthdayReminder(earthBirthday);

  useEffect(() => {
    const dateObject = new Date(router.query.date as string);
    const incomingBirthday =
      isValidDate(dateObject) && isInThePast(dateObject) && dateObject;

    if (incomingBirthday) {
      setEarthBirthday(incomingBirthday);
    }
  }, [router.query.date]);

  useEffect(() => {
    const { email } = router.query;
    console.log(email);
    if (email) {
      setEmail(email as string);
    }
  }, [router.query.email]);

  const handleDatechange = (date: Date) => {
    isValidDate(date) && setEarthBirthday(date);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const ImageComponent = () => {
    return (
      <Image
        src={"/birthday_banner.png"}
        height="100"
        width="300"
        layout="responsive"
        alt={"Picture of a Birthday Cake"}
      />
    );
  };

  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography
        id="birthday-tool"
        component="h2"
        variant="h3"
        color="primary"
      >
        Get Your Mars Birthday
      </Typography>

      <Card raised sx={{ mt: "2rem" }}>
        <CardMedia component={ImageComponent} />
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
                onChange={handleDatechange}
                maxDateTime={new Date()}
              />
            </Box>
            {earthBirthday && (
              <Box>
                <Typography paragraph>
                  You were born around {birthdayData.time}{" "}
                  <abbr title="Mars Coordinated Time">MTC</abbr> during L
                  <sub>S</sub> {birthdayData.ls} ({birthdayData.season} in the
                  Northern Hemisphere) in Mars Year {birthdayData.year}.
                </Typography>
                <Typography>
                  You are {ageInYears} Martian years old. Your next Martian
                  birthday is {nextBirthday}.
                </Typography>
              </Box>
            )}
            {earthBirthday && (
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
                  Get an email reminder!
                </Typography>
                <TextField
                  variant="outlined"
                  label="Email Address"
                  helperText="Enter Email Address"
                  value={email}
                  onChange={handleEmailChange}
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
            )}
          </Stack>
        </CardContent>
      </Card>
      <AlertSnackbar {...snackbarProps} />
    </Grid>
  );
}
