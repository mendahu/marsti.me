// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// // import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@mui/material/CssBaseline";
import { useTime } from "../src/hooks/useTime";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";
import Head from "next/head";

const oswaldFontFamily = {
  fontFamily: ["Oswald", "sans-serif"].join(","),
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
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CurrentTimeProvider value={useTime()}>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
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
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
        {/* </MuiPickersUtilsProvider> */}
      </CurrentTimeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
