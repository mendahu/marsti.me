import { Grid, Link } from "@mui/material";
import styles from "./styles/SocialMedia.module.css";
import Image from "next/image";

export type SocialMediaProps = {};

export default function SocialMedia(props: SocialMediaProps) {
  return (
    <Grid container item xs={12} md={6} maxWidth="400px">
      <Grid item xs={4} container justifyContent="center">
        <Grid item>
          <Link href="https://twitter.com/JakeOnOrbit" target="_blank">
            <Image src="/twitter-logo.png" width="60px" height="60px"></Image>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <Grid item>
          <Link href="https://github.com/mendahu" target="_blank">
            <Image src="/github-logo.png" width="60px" height="60px"></Image>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <Grid item>
          <Link href="https://www.linkedin.com/in/jakerobins/" target="_blank">
            <Image src="/linkedin-logo.png" width="60px" height="60px"></Image>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
