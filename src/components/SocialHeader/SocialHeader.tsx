const BASEURL = process.env.BASEURL;

const title = "Marsti.me";
const desc = "Learn about tracking time on the planet Mars.";
const alt = "The Curiosity Rover with a clock overlaid";
const keywords =
  "Mars, time, clock, sols, sol, solar longitude, year, minute, day, month";

export default function SocialHeader() {
  return (
    <>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jake Robins" />
      <meta property="og:url" content={`${BASEURL}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
        content={`${BASEURL}/facebook_share_photo.png`}
      />
      <meta property="og:image:alt" content={alt} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JakeOnOrbit" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta
        name="twitter:image"
        content={`${BASEURL}/twitter_summary_image.png`}
      />
      <meta name="twitter:image:alt" content={alt} />
    </>
  );
}
