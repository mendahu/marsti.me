import { useCurrentTime } from "../hooks/useCurrentTime";

export type MissionCardProps = {
  name: string;
  lon: number;
  missionStart: Date;
};

export const MissionCard = (props) => {
  const { lmst, missionSol } = useCurrentTime(props.missionStart);

  return (
    <article>
      <h2>{props.name}</h2>
      <p>Longitude {props.lon} W</p>
      <p>Mission Sol {missionSol}</p>

      <p>{lmst} LMST</p>
    </article>
  );
};

export default MissionCard;
