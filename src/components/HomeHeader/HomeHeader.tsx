import styles from "./styles/HomeHeader.module.css";
import Clock from "./Clock/Clock";
import { Button, Typography } from "@material-ui/core";

export type HomeHeaderProps = {};

export default function HomeHeader(props: HomeHeaderProps) {
  return (
    <header className={styles.root}>
      <div>
        <Typography variant="h1" component="h1">
          MARSTI.ME
        </Typography>
      </div>
      <Clock />
      <Button variant="contained" color="primary" href="#faq" size="large">
        What do these numbers mean?
      </Button>
    </header>
  );
}
