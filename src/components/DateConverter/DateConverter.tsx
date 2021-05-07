import { generateTimezoneString } from "../../helpers/generateTimezoneString";
import { getSeason } from "../../helpers/getSeason";
import { useDateConverter } from "../../hooks/useDateConverter";
import Textfield from "../TextField/Textfield";
import styles from "./styles/DateConverter.module.css";

export type DateConverterProps = {};

export default function DateConverter(props: DateConverterProps) {
  const {
    year,
    month,
    day,
    hour,
    minute,
    second,
    timezone,
    marsDate,
  } = useDateConverter();

  const onChange = (value: string, callback) => {
    if (isNaN(Number(value))) {
      return;
    } else {
      callback(value);
    }
  };

  const myTimezone = -(new Date().getTimezoneOffset() / 15);

  return (
    <section className={styles.root}>
      <h2>Convert a Date</h2>

      <div className={styles.container}>
        <div className={styles.dateSection}>
          <h3>Input Earth Date</h3>
          <div className={styles.fieldRow}>
            <Textfield
              value={year.value}
              onChange={(event) => onChange(event.target.value, year.set)}
              placeholder={"Year"}
              size={6}
            />
            <Textfield
              value={month.value}
              onChange={(event) => onChange(event.target.value, month.set)}
              placeholder={"Month"}
              size={6}
            />
            <Textfield
              value={day.value}
              onChange={(event) => onChange(event.target.value, day.set)}
              placeholder={"Day"}
              size={6}
            />
          </div>
          <div className={styles.fieldRow}>
            <Textfield
              value={hour.value}
              onChange={(event) => onChange(event.target.value, hour.set)}
              placeholder={"Hour"}
              size={6}
            />
            <Textfield
              value={minute.value}
              onChange={(event) => onChange(event.target.value, minute.set)}
              placeholder={"Minute"}
              size={6}
            />
            <Textfield
              value={second.value}
              onChange={(event) => onChange(event.target.value, second.set)}
              placeholder={"Second"}
              size={6}
            />
          </div>
          {/* <div>
            <p>Timezone: UTC{generateTimezoneString(timezone.value)}</p>
            <input
              type="range"
              className={styles.slider}
              min="-48"
              max="56"
              value={timezone.value}
              onChange={(event) => onChange(event.target.value, timezone.set)}
            />
          </div>
          <div>
            <button
              className={"primary"}
              onClick={() => onChange(myTimezone.toString(), timezone.set)}
            >
              My Timezone
            </button>
            <button
              className={"primary"}
              onClick={() => onChange("-28", timezone.set)}
            >
              Pacific
            </button>
            <button
              className={"primary"}
              onClick={() => onChange("-24", timezone.set)}
            >
              Mountain
            </button>
            <button
              className={"primary"}
              onClick={() => onChange("-20", timezone.set)}
            >
              Central
            </button>
            <button
              className={"primary"}
              onClick={() => onChange("-16", timezone.set)}
            >
              Eastern
            </button>
            <button
              className={"primary"}
              onClick={() => onChange("0", timezone.set)}
            >
              UTC
            </button>
            <button
              className={"primary"}
              onClick={() => onChange("4", timezone.set)}
            >
              Central European
            </button>
          </div> */}
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
