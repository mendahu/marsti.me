import styles from "./styles/Acknowledgements.module.css";
import { Grid, Link, Typography } from "@mui/material";

export type AcknowledgementsProps = {};

export default function Acknowledgements(props: AcknowledgementsProps) {
  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography variant="body2" align="center" paragraph>
        MARSTI.ME &copy; Copyright 2021 Jake Robins
      </Typography>
      <Typography variant="body2" align="center" paragraph>
        <Link href="https://www.flickr.com/photos/spool32/5045502202">
          Birthday Cake
        </Link>{" "}
        by Will Clayton used under{" "}
        <Link href="https://creativecommons.org/licenses/by/2.0/">
          Creative Commons Generic 2.0 License
        </Link>
      </Typography>
    </Grid>
  );
}
