import { useCurrentTime } from "../../../contexts/CurrentTimeContext";
import styles from "./styles/Clock.module.css";

export type ClockProps = {};

export default function Clock(props: ClockProps) {
  const { getLMST, ls, year } = useCurrentTime();
  const { hour, min, sec } = getLMST();

  const roundedLs = Math.round(ls * 10000) / 10000;

  return (
    <div className={styles.root}>
      <div className={styles.time}>
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
      <div className={styles.date}>
        <div>
          <span>
            L<sub>S</sub> {roundedLs}&deg;
          </span>
        </div>
        <div>
          <span>MY {year}</span>
        </div>
      </div>
    </div>
  );
}
