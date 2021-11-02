import { Link, Typography } from "@mui/material";
import styles from "./styles/Timezones.module.css";

export type TimezonesProps = {};

export default function Timezones(props: TimezonesProps) {
  return (
    <div>
      <Typography paragraph>
        Just like Earth, Mars is round. At any given time, parts of the planet
        are in daylight, facing the Sun, while others are in darkness, facing
        away from the Sun. Local time varies depending on your longitude, which
        is inconvenient if you need to coorindate with someone in a different
        longitude.
      </Typography>
      <Typography paragraph>
        On Earth, we've solved this problem using timezones. But timezones are a
        compromise, because the position of the sun changes every step you take.
        Imagine having to change your clock by a 10 seconds because you commuted
        a few kilometres to the East or West! Having timezones generally 1 hour
        wide keeps the meaning of 2PM the same everywhere, but allows proximate
        communities to all work on a shared time.
      </Typography>
      <Typography paragraph>
        On Mars there are no flight schedules to sync up, and no communities to
        keep on shared time. And so there are no timezones (yet). Instead, we
        can calculate local time using math depending on your precise longitude.
      </Typography>
      <Typography paragraph>
        On Mars we define longitude 0 at a place called{" "}
        <Link href="https://mars.nasa.gov/gallery/atlas/PIA03207.html">
          Airy crater
        </Link>
        , named after George Biddell Airy, an English mathemetician and
        astronomer who contributed to establishing the Greenwich Observatory as
        Earth's prime meridian. The time at longitude 0 is called Mars
        Coordinated Time (MTC), just like Earth's UTC.
      </Typography>
      <Typography paragraph>
        All of the mission clocks displayed above calculate the Local Mean Solar
        Time of the mission based on their longitude. For NASA rovers, it is
        updated using data from NASA's Jet Propulsion Laboratory as the vehicles
        traverse the Martian surface.
      </Typography>
    </div>
  );
}
