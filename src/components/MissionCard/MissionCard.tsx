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
        />
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>LON {formatLon(props.lon)} W</p>
        <p>Mission Sol: {sol}</p>
        <p>
          {hour}:{min}:{sec} LMST
        </p>
      </div>
    </article>
  );
};

export default MissionCard;
