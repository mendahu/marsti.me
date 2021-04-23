import { generateTimezoneString } from "../../helpers/generateTimezoneString";
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

  return (
    <section className={styles.root}>
      <h2>Convert a Date</h2>

      <div className={styles.container}>
        <div>
          <h3>Input Earth Date</h3>
          <div>
            <Textfield
              value={year.value}
              onChange={(event) => onChange(event.target.value, year.set)}
              placeholder={"Year"}
              size={10}
            />
            <Textfield
              value={month.value}
              onChange={(event) => onChange(event.target.value, month.set)}
              placeholder={"Month"}
              size={10}
            />
            <Textfield
              value={day.value}
              onChange={(event) => onChange(event.target.value, day.set)}
              placeholder={"Day"}
              size={10}
            />
          </div>
          <div>
            <Textfield
              value={hour.value}
              onChange={(event) => onChange(event.target.value, hour.set)}
              placeholder={"Hour"}
              size={10}
            />
            <Textfield
              value={minute.value}
              onChange={(event) => onChange(event.target.value, minute.set)}
              placeholder={"Minute"}
              size={10}
            />
            <Textfield
              value={second.value}
              onChange={(event) => onChange(event.target.value, second.set)}
              placeholder={"Second"}
              size={10}
            />
          </div>
          <div>
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
        </div>

        <div>
          <h3>Converted Mars Date</h3>
          <p>{marsDate.getCalendarYear()}</p>
          <p>{marsDate.getLs()}</p>
          <p>{marsDate.getMST()}</p>
          <p></p>
        </div>
      </div>
    </section>
  );
}
