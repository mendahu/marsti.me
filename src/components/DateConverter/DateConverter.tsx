import { useState } from "react";
import Textfield from "../TextField/Textfield";
import styles from "./styles/DateConverter.module.css";

export type DateConverterProps = {};

export default function DateConverter(props: DateConverterProps) {
  const [value, setValue] = useState("");
  return (
    <section className={styles.root}>
      <h2>Convert a Date</h2>

      <div className={styles.container}>
        <div>
          <h3>Input Earth Date</h3>
          <div>
            <Textfield
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Year"}
              size={10}
            />
            <Textfield
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Month"}
              size={10}
            />
            <Textfield
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Day"}
              size={10}
            />
          </div>
          <div>
            <Textfield
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Hour"}
              size={10}
            />
            <Textfield
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Minute"}
              size={10}
            />
            <Textfield
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={"Second"}
              size={10}
            />
          </div>
        </div>

        <div>
          <h3>Converted Mars Date</h3>
        </div>
      </div>
    </section>
  );
}
