import styles from "./styles/SocialHeader.module.css";

const BASEURL = process.env.BASEURL;

export type SocialHeaderProps = {};

export default function SocialHeader(props: SocialHeaderProps) {
  return (
    <>
      <meta
        name="description"
        content="Learn about tracking time on the planet Mars."
      />
      <meta
        name="keywords"
        content="Mars, time, clock, sols, sol, solar longitude, year, minute, day, month"
      />
      <meta name="author" content="Jake Robins" />
      <meta property="og:url" content={`${BASEURL}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Marsti.me" />
      <meta
        property="og:description"
        content="Learn about tracking time on the planet Mars."
      />
      <meta
        property="og:image"
        content={`${BASEURL}/facebook_share_photo.png`}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JakeOnOrbit" />
      <meta name="twitter:title" content="Marsti.me" />
      <meta
        name="twitter:description"
        content="Learn about tracking time on the planet Mars."
      />
      <meta
        name="twitter:image"
        content={`${BASEURL}/twitter_summary_image.png`}
      />
      <meta
        name="twitter:image:alt"
        content="The Curiosity Rover with a clock overlaid"
      />
    </>
  );
}
