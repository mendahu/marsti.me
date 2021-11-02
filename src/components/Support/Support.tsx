import {
  Card,
  CardContent,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./styles/Support.module.css";
import Image from "next/image";

export type SupportProps = {};

export default function Support(props: SupportProps) {
  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography component="h2" variant="h3" color="primary">
        Support MARSTI.ME
      </Typography>
      <Card raised sx={{ mt: "2rem" }}>
        <CardContent>
          <Typography>
            MARSTI.ME was created and is maintained by me,{" "}
            <Link href="https:/twitter.com/JakeOnOrbit" target="_blank">
              Jake Robins
            </Link>
            , an independent content creator and developer. If you get value
            from this site, consider supporting me. Anything helps, even one
            dollar!
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link
                    href="https://www.patreon.com/wemartians"
                    target="_blank"
                  >
                    <Image
                      src="/Digital-Patreon-Logo_FieryCoral.png"
                      width="60px"
                      height="60px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link
                      href="https://www.patreon.com/wemartians"
                      target="_blank"
                    >
                      Patreon
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Support all my work for as little as $3 USD/month and gain
                    access to extra perks.
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="https://shop.wemartians.com" target="_blank">
                    <Image
                      src="/shirt.png"
                      width="70px"
                      height="70px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link href="https://shop.wemartians.com" target="_blank">
                      Merchandise
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Pick up a t-shirt, coffee mug or some stickers with some
                    great space designs.
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    href="https://www.paypal.com/paypalme/wemartians"
                    target="_blank"
                  >
                    <Image
                      src="/paypal.jpeg"
                      width="68px"
                      height="44px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link
                      href="https://www.paypal.com/paypalme/wemartians"
                      target="_blank"
                    >
                      Paypal
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Send me a couple bucks to say thanks!
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
