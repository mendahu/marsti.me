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
import wmLogo from "../../../public/wm-logo.png";
import ofnLogo from "../../../public/ofn-logo.png";
import Image from "next/image";
import * as ga from "../../../lib/ga";

export default function RelatedContent() {
  const linkClick = (property: string) => {
    ga.event({
      action: "content-click",
      params: property,
    });
  };
  return (
    <Grid item xs={12} md={6} maxWidth="400px">
      <Typography component="h2" variant="h3" color="primary">
        More Space Content
      </Typography>
      <Card raised sx={{ mt: "2rem" }}>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link
                    href="https://www.wemartians.com"
                    target="_blank"
                    onClick={() => linkClick("wemartians")}
                  >
                    <Image
                      src={wmLogo}
                      width="60px"
                      height="60px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link
                      href="https://www.wemartians.com"
                      target="_blank"
                      onClick={() => linkClick("wemartians")}
                    >
                      WeMartians
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    A Podcast about exploring the solar system
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    href="https://www.offnom.com"
                    target="_blank"
                    onClick={() => linkClick("off-nominal")}
                  >
                    <Image
                      src={ofnLogo}
                      width="70px"
                      height="70px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link
                      href="https://www.offnom.com"
                      target="_blank"
                      onClick={() => linkClick("off-nominal")}
                    >
                      Off-Nominal
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    A casual YouTube show about space
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
