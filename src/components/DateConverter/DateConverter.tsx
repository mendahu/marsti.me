import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../../helpers/getSeason";
import DateItem from "./DateItem/DateItem";

import styles from "./styles/DateConverter.module.css";

export type DateConverterProps = {};

export default function DateConverter(props: DateConverterProps) {
  const [earthDate, setEarthDate] = useState(new Date());
  const marsDate = new MarsDate(earthDate);

  const my = marsDate.getCalendarYear().toString();
  const ls = (Math.round(marsDate.getLs() * 1000) / 1000).toString() + "°";
  const mst = marsDate.getMST();

  return (
    <section className={styles.root}>
      <h2>Convert a Date</h2>

      <div className={styles.container}>
        <div className={styles.dateSection}>
          <h3 className={styles.inputHeader}>Input Earth Date</h3>
          <KeyboardDateTimePicker value={earthDate} onChange={setEarthDate} />
        </div>

        <div className={styles.dateSection}>
          <h3 className={styles.inputHeader}>Converted Mars Date</h3>
          <div>
            <div className={styles.dateItemContainer}>
              <DateItem title="MY" body={my} />
              <DateItem title="LS" body={ls} />
              <DateItem title="MST" body={mst} />
            </div>
            <p className={styles.seasonText}>
              ({getSeason(marsDate.getLs())}, Northern Hemisphere)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
