import Clock from "./Clock/Clock";
import { Button, Typography, Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export type HomeHeaderProps = {};

export default function HomeHeader(props: HomeHeaderProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container component="header" maxWidth="xs" disableGutters>
      <Typography variant={matches ? "h1" : "h2"} component="h1" align="center">
        MARSTI.ME
      </Typography>
      <Clock />
      <Button variant="contained" color="primary" href="#faq" size="large">
        What do these mean?
      </Button>
    </Container>
  );
}
