import { Typography } from "@mui/material";
import styles from "./styles/Time.module.css";

export type TimeProps = {};

export default function Time(props: TimeProps) {
  return (
    <div>
      <Typography paragraph>
        The <i>second</i> (s) is the Standard International (SI) unit of time.
        When measuring duration, seconds on Mars are the same as seconds on
        Earth or anywhere else.
      </Typography>
      <Typography paragraph>
        Minutes and hours are derived from seconds (60 seconds to 1 minute and
        60 minutes to 1 hour), and so they are also the same on Mars.
      </Typography>
      <Typography paragraph>
        Measuring the duration of time (ie. "How long should I sleep for?") is
        different from marking time during a day. When NASA landed their first
        Mars surface mission in 1976 (the Viking lander), they adopted a
        convention of a 24 hour clock just like Earth.
      </Typography>
      <Typography paragraph>
        This practice splits the Martian day up into 24 hours, with traditioanl
        sexagesimal divisions (60 minutes and 60 seconds). This means that the
        duration of time between 1PM and 2PM is actually longer than an hour.
        But this is useful for humans, because now 2PM is roughly the same part
        of a day on Mars as it is on Earth.
      </Typography>
    </div>
  );
}
