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
import styles from "./styles/RelatedContent.module.css";
import Image from "next/image";

export type RelatedContentProps = {};

export default function RelatedContent(props: RelatedContentProps) {
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
                  <Link href="https://www.wemartians.com" target="_blank">
                    <Image
                      src="/wm-logo.png"
                      width="60px"
                      height="60px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link href="https://www.wemartians.com" target="_blank">
                      WeMartians
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    A Podcast about Mars Exploration
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="https://www.offnom.com" target="_blank">
                    <Image
                      src="/ofn-logo.png"
                      width="70px"
                      height="70px"
                      layout="fixed"
                    ></Image>
                  </Link>
                </TableCell>
                <TableCell>
                  <Typography component="h3" variant="h6">
                    <Link href="https://www.offnom.com" target="_blank">
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
