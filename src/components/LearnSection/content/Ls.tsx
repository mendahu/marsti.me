import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./styles/Ls.module.css";

export type LsProps = {};

export default function Ls(props: LsProps) {
  return (
    <div>
      <Typography paragraph>
        Solar Longitude measures the point where Mars is in its orbit around the
        sun. It's a numerical representation of seasons, since we don't track
        months on Mars.
      </Typography>
      <Typography paragraph>
        Solar Longitude (L<sub>s</sub>, said out loud <i>ell sub ess</i>) starts
        at 0&deg; (the beginning of Spring, or Vernal Equinox, in the Northern
        Hemisphere) and goes to 360&deg; degrees one year later.
      </Typography>
      <Typography>
        Here are some L<sub>s</sub> numbers and their cooresponding seasons.
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              L<sub>s</sub>
            </TableCell>
            <TableCell>Northern Hemisphere</TableCell>

            <TableCell>Approx. Earth date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>0&deg;</TableCell>
            <TableCell>First day of Spring</TableCell>

            <TableCell>Mar.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>90&deg;</TableCell>
            <TableCell>First day of Summer</TableCell>

            <TableCell>Jun.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>180&deg;</TableCell>
            <TableCell>First day of Fall</TableCell>

            <TableCell>Sep.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>270&deg;</TableCell>
            <TableCell>First day of Winter</TableCell>

            <TableCell>Dec.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
