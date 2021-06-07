import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";

export const useTime = () => {
  const [cd, setCd] = useState<MarsDate>(new MarsDate(new Date()));

  const year = cd.getCalendarYear();
  const ls = cd.getLs();

  const resetClock = () => {
    setCd(new MarsDate(new Date()));
  };

  useEffect(() => {
    setInterval(() => {
      resetClock();
    }, 1000);
  }, []);

  const generateTimeObj = (time: string) => {
    return {
      hour: time.slice(0, 2),
      min: time.slice(3, 5),
      sec: time.slice(6, 8),
    };
  };

  const getLMST = (lon: number = 0) => {
    const mst = cd.getLMST(lon);
    return generateTimeObj(mst);
  };

  const getLTST = (lon: number = 0) => {
    const tst = cd.getLTST(lon);
    return generateTimeObj(tst);
  };

  return { getLMST, getLTST, year, ls };
};