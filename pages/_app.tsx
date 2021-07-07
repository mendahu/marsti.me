import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTime } from "../src/hooks/useTime";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";

const oswaldFontFamily = {
  fontFamily: ["Oswald", "sans-serif"].join(","),
  color: "#cc4425",
};

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
    text: {
      secondary: "#eaecef",
    },
    background: {
      paper: "#dadada",
      default: "#eaecef",
    },
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
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </CurrentTimeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
