import styles from "./styles/HomeHeader.module.css";
import Clock from "./Clock/Clock";
import classnames from "classnames";

export type HomeHeaderProps = {};

export default function HomeHeader(props: HomeHeaderProps) {
  return (
    <header className={styles.root}>
      <div>
        <h1 className={styles.title}>MARSTI.ME</h1>
      </div>
      <Clock />
      <a href="#faq">
        <button className={classnames("primary", styles.button)}>
          What do these numbers mean?
        </button>
      </a>
    </header>
  );
}
