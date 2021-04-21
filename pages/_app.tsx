import "../styles/reset.css";
import "../styles/globals.css";
import CurrentTimeProvider from "../src/contexts/CurrentTimeContext";
import { useTime } from "../src/hooks/useTime";

function MyApp({ Component, pageProps }) {
  return (
    <CurrentTimeProvider value={useTime()}>
      <Component {...pageProps} />
    </CurrentTimeProvider>
  );
}

export default MyApp;
