import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../../helpers/getSeason";

import styles from "./styles/DateConverter.module.css";

export type DateConverterProps = {};

export default function DateConverter(props: DateConverterProps) {
  const [earthDate, setEarthDate] = useState(new Date());
  const marsDate = new MarsDate(earthDate);

  const onChange = (value: string, callback) => {
    if (isNaN(Number(value))) {
      return;
    } else {
      callback(value);
    }
  };

  return (
    <section className={styles.root}>
      <h2>Convert a Date</h2>

      <div className={styles.container}>
        <div className={styles.dateSection}>
          <h3>Input Earth Date</h3>
          <KeyboardDateTimePicker value={new Date()} onChange={setEarthDate} />
        </div>

        <div className={styles.dateSection}>
          <h3>Converted Mars Date</h3>
          <p>{marsDate.getCalendarYear()}</p>
          <p>
            {Math.round(marsDate.getLs() * 10000) / 10000} (
            {getSeason(marsDate.getLs())}, Northern Hemisphere)
          </p>
          <p>{marsDate.getMST()}</p>
          <p></p>
        </div>
      </div>
    </section>
  );
}
