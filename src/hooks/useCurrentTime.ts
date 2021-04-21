import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  const [cd, setCd] = useState<MarsDate>(new MarsDate(new Date()));

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
    const mst = cd.getLTST(lon);
    return generateTimeObj(mst);
  };

  return { getLMST, getLTST };
};
