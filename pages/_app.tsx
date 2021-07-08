import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@material-ui/core/CssBaseline";
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
    background: {
      paper: "#3e4147",
    },
    type: "dark",
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
          </Head>
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </CurrentTimeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
