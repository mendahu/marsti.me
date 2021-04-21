import styles from "./styles/HomeHeader.module.css";
import Clock from "./Clock/Clock";

export type HomeHeaderProps = {};

export default function HomeHeader(props: HomeHeaderProps) {
  return (
    <header className={styles.root}>
      <div>
        <h1 className={styles.title}>MARSTI.ME</h1>
      </div>
      <Clock />
    </header>
  );
}
