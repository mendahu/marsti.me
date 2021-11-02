import { Link, Typography } from "@mui/material";
import styles from "./styles/Years.module.css";

export type YearsProps = {};

export default function Years(props: YearsProps) {
  return (
    <div>
      <Typography paragraph>
        A year on Mars is defined the same way it is on any other planet,
        including Earth. A year is the time it takes the planet to orbit the Sun
        once.
      </Typography>
      <Typography paragraph>
        Mars is further from the Sun than Earth, however, and so its orbit is
        longer. This means that a year on Mars is about 687 Earth days long (88%
        longer than an Earth year).
      </Typography>
      <Typography paragraph>
        Planetary scientists track Mars years starting with Mars Year 1 (MY1)
        which began on April 11, 1955. This date is arbitrary; it was chosen by
        scientist R. Todd Clancy in a{" "}
        <Link href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/1999JE001089">
          publication
        </Link>{" "}
        describing seasonal temperatures around a great dust storm in 1956, but
        it has since become convention by the scientific community.
      </Typography>
    </div>
  );
}
