import { Typography } from "@mui/material";
import styles from "./styles/MeanSolar.module.css";

export type MeanSolarProps = {};

export default function MeanSolar(props: MeanSolarProps) {
  return (
    <div>
      <Typography paragraph>
        On any planet, "True" solar time is what could be measured on a sundial
        - it uses the actual position of the Sun to determine the time of day.
      </Typography>
      <Typography paragraph>
        However, just like Earth, Mars' days are not actually constant in
        duration. The rotation speed of the planet and the eccentricity of its
        orbit cause seasonal and daily changes to the duration. This is
        inconvenient for timekeeping.
      </Typography>
      <Typography paragraph>
        So, just like on Earth, we adopt two types of solar time. "Mean" solar
        time averages out the daily and seasonal variations over a year in order
        to get a day duration that is constant.
      </Typography>
      <Typography paragraph>
        Mean solar time is what you use everyday on Earth. It's also what
        engineers operating space missions on Mars surface use, and it's what
        this site displays.
      </Typography>
    </div>
  );
}
