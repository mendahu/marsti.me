import { useCurrentTime } from "../../../hooks/useCurrentTime";
import styles from "./styles/Clock.module.css";

export type ClockProps = {};

export default function Clock(props: ClockProps) {
  const { hour, min, sec } = useCurrentTime(224.3766);

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
