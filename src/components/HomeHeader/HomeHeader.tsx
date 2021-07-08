import Clock from "./Clock/Clock";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  Container,
  Theme,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export type HomeHeaderProps = {};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: "1.6rem",
  },
}));

export default function HomeHeader(props: HomeHeaderProps) {
  const classes = useStyles();
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
        <Grid item className={classes.button}>
          <Button variant="contained" color="primary" href="#faq" size="large">
            What do these mean?
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
