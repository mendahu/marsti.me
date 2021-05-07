import styles from "./styles/Ls.module.css";

export type LsProps = {};

export default function Ls(props: LsProps) {
  return (
    <div>
      <p>
        Solar Longitude measures the point where Mars is in its orbit around the
        sun. It's a numerical representation of seasons, since we don't track
        months on Mars. Solar Longitude (Ls, said out loud 'ell sub ess') starts
        at 0 (Vernal Equinox in the Northern Hemisphere) and goes to 360 degrees
        one years later.
      </p>
    </div>
  );
}
