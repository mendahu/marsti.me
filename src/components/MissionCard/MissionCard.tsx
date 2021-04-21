import { useCurrentTime } from "../../contexts/CurrentTimeContext";
import { useMissionTime } from "../../hooks/useMissionTime";
import styles from "./styles/MissionCard.module.css";

export type MissionCardProps = {
  name: string;
  lon: number;
  missionStart: Date;
};

export const MissionCard = (props: MissionCardProps) => {
  const { getLMST } = useCurrentTime();
  const { hour, min, sec } = getLMST(props.lon);
  const { sol } = useMissionTime(props.missionStart, props.lon);

  const formatLon = (lon: number) => {
    return Math.round(lon * 10000) / 10000;
  };

  return (
    <article className={styles.card}>
      <h3>{props.name}</h3>
      <p>LON {formatLon(props.lon)} W</p>
      <p>Mission Sol: {sol}</p>
      <p>
        {hour}:{min}:{sec} LMST
      </p>
    </article>
  );
};

export default MissionCard;
