import classnames from "classnames";
import styles from "./styles/NavItem.module.css";

export type NavItemProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function NavItem(props: NavItemProps) {
  return (
    <li
      className={classnames(props.selected && styles.selected, styles.root)}
      onClick={props.onClick}
    >
      {props.label}
    </li>
  );
}
