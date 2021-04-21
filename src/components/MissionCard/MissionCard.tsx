import { useCurrentTime } from "../../contexts/CurrentTimeContext";
import { useMissionTime } from "../../hooks/useMissionTime";
import styles from "./styles/MissionCard.module.css";
import Image from "next/image";

export type MissionCardProps = {
  name: string;
  lon: number;
  missionStart: Date;
  bannerUrl: string;
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
      <div>
        <Image
          src={props.bannerUrl}
          alt={`${props.name} Mission Banner`}
          width={450}
          height={150}
          className={styles.banner}
        />
      </div>
      <div className={styles.textContainer}>
        <h3>{props.name}</h3>
        <div className={styles.subheaderContainer}>
          <span className={styles.subheader}>Sol: {sol}</span>
          <span className={styles.subheader}>
            {formatLon(props.lon)}&#176; W
          </span>
        </div>
        <div className={styles.clockContainer}>
          <span className={styles.clock}>
            {hour}:{min}:{sec} LMST
          </span>
        </div>
      </div>
    </article>
  );
};

export default MissionCard;
