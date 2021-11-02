import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./styles/Sols.module.css";

export type SolsProps = {};

export default function Sols(props: SolsProps) {
  return (
    <div>
      <Typography paragraph>
        A day on Mars is defined the same way as it is on any other planet. A
        day is the time it takes for a planet to spin around its axis once.
      </Typography>
      <Typography paragraph>
        Mars spins slightly slower than Earth does, however. A solar day on Mars
        is around 40 minutes more than Earth's.
      </Typography>
      <Typography paragraph>
        Here is how the Martian day compares to Earth's:
      </Typography>
      <Table sx={{ marginBottom: "20px" }}>
        <TableHead>
          <TableRow>
            <TableCell>Day type</TableCell>
            <TableCell>Earth</TableCell>
            <TableCell>Mars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Solar</TableCell>
            <TableCell>24h </TableCell>
            <TableCell>24h 39m 35s</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sidereal</TableCell>
            <TableCell>23h 56m 4s</TableCell>
            <TableCell>24h 37m 23s</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography paragraph>
        Learn more about the difference between a solar day and a sidereal day{" "}
        <Link href="https://earthsky.org/astronomy-essentials/what-is-sidereal-time/">
          here
        </Link>
        .
      </Typography>
    </div>
  );
}
