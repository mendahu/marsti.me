import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { useTime } from "../src/hooks/useTime";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";
import Head from "next/head";
import SocialHeader from "../src/components/SocialHeader/SocialHeader";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    clock: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    clock?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    clock: true;
  }
}

const oxygenFont = ["Oxygen Mono", "monospace"].join(",");
const oswaldFont = ["Oswald", "sans-serif"].join(",");

const oswaldFontFamily = {
  fontFamily: oswaldFont,
};

const oxygenFontFamily = {
  fontFamily: oxygenFont,
};

const theme = createTheme({
  palette: {
    primary: {
      light: "#d66950",
      main: "#cc4425",
      dark: "#8e2f19",
      contrastText: "#ffffff",
    },
    mode: "dark",
  },
  typography: {
    h1: oswaldFontFamily,
    h2: oswaldFontFamily,
    h3: oswaldFontFamily,
    h4: oswaldFontFamily,
    h5: oswaldFontFamily,
    h6: oswaldFontFamily,
    clock: oxygenFontFamily,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <CurrentTimeProvider value={useTime()}>
          <Head>
            <title>Mars Time</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="favicons/site.webmanifest" />
            <link
              rel="mask-icon"
              href="favicons/safari-pinned-tab.svg"
              color="#cc4425"
            />
            <meta name="msapplication-TileColor" content="#121212" />
            <meta name="theme-color" content="#ffffff" />
            <SocialHeader />
          </Head>
          <Component {...pageProps} />
        </CurrentTimeProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
