import Clock from "./Clock/Clock";
import {
  Button,
  Grid,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";

export type HomeHeaderProps = {};

export default function HomeHeader(props: HomeHeaderProps) {
  const isWideScreen = useMediaQuery("(min-width:415px)");

  return (
    <Container component="header" maxWidth="xs" disableGutters>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography
            variant={isWideScreen ? "h1" : "h2"}
            component="h1"
            align="center"
            color="primary"
          >
            MARSTI.ME
          </Typography>
        </Grid>
        <Grid item>
          <Clock />
        </Grid>
        <Grid item sx={{ mt: "1.6rem" }}>
          <Button variant="contained" color="primary" href="#faq" size="large">
            What do these mean?
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
