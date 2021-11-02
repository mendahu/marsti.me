import { Typography } from "@mui/material";
import styles from "./styles/MonthsAndWeeks.module.css";

export type MonthsAndWeeksProps = {};

export default function MonthsAndWeeks(props: MonthsAndWeeksProps) {
  return (
    <div>
      <Typography paragraph>
        Both months and weeks are used on Earth by humans to organize their
        time. They are arbitrary in nature (even though they may have roots in
        natural processes like the lunar cycle)
      </Typography>
      <Typography paragraph>
        Since no humans live on Mars (yet), there isn't a use for breaking up
        time into work weeks or similar. As of today, there is no such thing as
        a Martian week or month.
      </Typography>
      <Typography paragraph>
        Planetary scientists studying Mars do need to keep track of seasons,
        however, and to do that they use something called Solar Longitude (see
        next section).
      </Typography>
    </div>
  );
}
