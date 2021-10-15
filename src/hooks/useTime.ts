import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";

type Time = {
  hour: string;
  min: string;
  sec: string;
};

export type TimeUtilities = {
  getLMST: (lon?: number) => Time;
  getLTST: (lon?: number) => Time;
  year: number;
  ls: number;
};

export const useTime = (): TimeUtilities => {
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

  const generateTimeObj = (time: string): Time => {
    return {
      hour: time.slice(0, 2),
      min: time.slice(3, 5),
      sec: time.slice(6, 8),
    };
  };

  const getLMST = (lon: number = 0): Time => {
    const mst = cd.getLMST(lon);
    return generateTimeObj(mst);
  };

  const getLTST = (lon: number = 0): Time => {
    const tst = cd.getLTST(lon);
    return generateTimeObj(tst);
  };

  return { getLMST, getLTST, year, ls };
};
