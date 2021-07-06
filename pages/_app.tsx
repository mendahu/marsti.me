import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTime } from "../src/hooks/useTime";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff7550",
      main: "#cc4425",
      dark: "#940600",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#696c72",
      main: "#3e4147",
      dark: "#181b20",
      contrastText: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontFamily: ["Oswald", "sans-serif"].join(","),
      color: "#cc4425",
    },
    h2: {
      fontFamily: ["Oswald", "sans-serif"].join(","),
      color: "#cc4425",
    },
    h3: {
      fontFamily: ["Oswald", "sans-serif"].join(","),
      color: "#cc4425",
    },
    h4: {
      fontFamily: ["Oswald", "sans-serif"].join(","),
      color: "#cc4425",
    },
    h5: {
      fontFamily: ["Oswald", "sans-serif"].join(","),
      color: "#cc4425",
    },
    h6: {
      fontFamily: ["Oswald", "sans-serif"].join(","),
      color: "#cc4425",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CurrentTimeProvider value={useTime()}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </CurrentTimeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
