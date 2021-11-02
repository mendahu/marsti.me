import { Link, Typography } from "@mui/material";
import styles from "./styles/Reading.module.css";

export type ReadingProps = {};

export default function Reading(props: ReadingProps) {
  return (
    <div>
      {" "}
      <Typography paragraph>
        Want to learn more about Martian time? Here are some great resources.
      </Typography>
      <ul>
        <li>
          <Link href="https://www.giss.nasa.gov/tools/mars24/help/algorithm.html">
            The math behind Marsti.me (NASA GISS)
          </Link>
        </li>
        <li>
          <Link href="https://oregonl5.nss.org/mist/docs/Mars24J/help/notes.html">
            Technical Notes on Mars Solar Time (National Space Society)
          </Link>
        </li>
        <li>
          <Link href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/1999JE001089">
            Paper by Clancy et al establishing Mars Years convention (AGU)
          </Link>
        </li>
        <li>
          <Link href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/1999JE001089">
            Paper by Allison describing solar time and seasons (1997) (AGU)
          </Link>
        </li>
        <li>
          <Link href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/1999JE001089">
            Paper by Allison and McEwen further defining Mars time (2000) (AGU)
          </Link>
        </li>
      </ul>
      <Typography paragraph>
        Are you a JavaScript developer? You can use our time calculation libray
        in your own Node application! Check it out on{" "}
        <Link href="https://www.npmjs.com/package/mars-date-utils">npm</Link>.
      </Typography>
    </div>
  );
}
