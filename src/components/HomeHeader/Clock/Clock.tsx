import { useCurrentTime } from "../../../contexts/CurrentTimeContext";
import styles from "./styles/Clock.module.css";

export type ClockProps = {};

export default function Clock(props: ClockProps) {
  const { getLMST } = useCurrentTime();
  const { hour, min, sec } = getLMST();

  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <span className={styles.main}>
          {hour}:{min}
        </span>
      </div>
      <div className={styles.secondaryContainer}>
        <div>
          <span className={styles.secondary}>:{sec}</span>
        </div>
        <div>
          <span className={styles.tertiary}>MST</span>
        </div>
      </div>
    </div>
  );
}
