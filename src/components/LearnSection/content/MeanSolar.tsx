import styles from "./styles/MeanSolar.module.css";

export type MeanSolarProps = {};

export default function MeanSolar(props: MeanSolarProps) {
  return (
    <div>
      <p>
        Mean Solar Time is the time at Longitude Zero on Mars. It is
        functionally equivalent to Earth's UTC or Greenwich Mean Time.
      </p>
    </div>
  );
}
