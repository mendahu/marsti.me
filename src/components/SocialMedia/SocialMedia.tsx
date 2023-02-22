import { Grid, Link } from "@mui/material";
import Image from "next/image";
import twitterLogo from "../../../public/twitter-logo.png";
import githubLogo from "../../../public/github-logo.png";
import linkedinLogo from "../../../public/linkedin-logo.png";
import * as ga from "../../../lib/ga";

export default function SocialMedia() {
  const linkClick = (property: string) => {
    ga.event({
      action: "content-click",
      params: property,
    });
  };
  return (
    <Grid container item xs={12} md={6} maxWidth="400px">
      <Grid item xs={4} container justifyContent="center">
        <Grid item>
          <Link
            href="https://twitter.com/JakeOnOrbit"
            target="_blank"
            onClick={() => linkClick("twitter")}
          >
            <Image src={twitterLogo} width="60px" height="60px"></Image>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <Grid item>
          <Link
            href="https://github.com/mendahu"
            target="_blank"
            onClick={() => linkClick("github")}
          >
            <Image src={githubLogo} width="60px" height="60px"></Image>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/jakerobins/"
            target="_blank"
            onClick={() => linkClick("linkedin")}
          >
            <Image src={linkedinLogo} width="60px" height="60px"></Image>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
