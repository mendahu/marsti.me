import styles from "./styles/Textfield.module.css";
import clsx from "classnames";

export type TextfieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  size?: number;
};

export default function Textfield(props: TextfieldProps) {
  return (
    <input
      type="text"
      value={props.value}
      size={props.size}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={clsx(styles.input, props.className)}
    ></input>
  );
}
