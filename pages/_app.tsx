import "../styles/reset.css";
import "../styles/globals.css";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";
import { useTime } from "../src/hooks/useTime";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
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
  });

  return (
    <ThemeProvider theme={theme}>
      <CurrentTimeProvider value={useTime()}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </CurrentTimeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
