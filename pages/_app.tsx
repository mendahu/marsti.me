import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { useTime } from "../src/hooks/useTime";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";
import Head from "next/head";

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
          </Head>
          <Component {...pageProps} />
        </CurrentTimeProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
