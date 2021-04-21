import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";

export const useMissionTime = (missionStart: Date, lon: number) => {
  const [sol, setSol] = useState<number>();

  const resetClock = () => {
    const md = new MarsDate(missionStart);
    setSol(md.getSolOfMission(lon));
  };

  useEffect(() => {
    setInterval(() => {
      resetClock();
    }, 1000);
  }, []);

  return {
    sol,
  };
};
