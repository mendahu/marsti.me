import classnames from "classnames";
import styles from "./styles/ContentItem.module.css";

export type ContentItemProps = {
  text: JSX.Element;
  selected: boolean;
};

export default function ContentItem(props: ContentItemProps) {
  return (
    <div className={classnames(styles.root, props.selected && styles.selected)}>
      {props.text}
    </div>
  );
}
