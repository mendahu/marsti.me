import styles from "./styles/DateItem.module.css";

export type DateItemProps = {
  title: string;
  body: string;
};

export default function DateItem(props: DateItemProps) {
  return (
    <div className={styles.container}>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}
