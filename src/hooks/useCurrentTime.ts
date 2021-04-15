import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";

export const useCurrentTime = (start: Date = new Date(), lon: number = 0) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const cd = new MarsDate(currentTime);
  const md = new MarsDate(start);

  const lmst = cd.getLMST(lon);
  const my = cd.getCalendarYear();
  const ls = cd.getLs();
  const mst = cd.getMST();

  const missionSol = md.getSolOfMission(lon);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, [currentTime]);

  return {
    mst,
    my,
    ls,
    lmst,
    missionSol,
  };
};
