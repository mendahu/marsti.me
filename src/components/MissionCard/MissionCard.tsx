import { useCurrentTime } from "../../hooks/useCurrentTime";
import { useMissionTime } from "../../hooks/useMissionTime";

export type MissionCardProps = {
  name: string;
  lon: number;
  missionStart: Date;
};

export const MissionCard = (props: MissionCardProps) => {
  const { getLMST } = useCurrentTime();
  const { hour, min, sec } = getLMST(props.lon);
  const { sol } = useMissionTime(props.missionStart, props.lon);

  return (
    <article>
      <h2>{props.name}</h2>
      <p>LON {props.lon} W</p>
      <p>Mission Sol: {sol}</p>
      <p>
        {hour}:{min}:{sec} LMST
      </p>
    </article>
  );
};

export default MissionCard;
